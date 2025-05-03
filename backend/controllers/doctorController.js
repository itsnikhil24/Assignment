// controllers/doctorController.js
const Doctor = require('../models/Doctors');

exports.addDoctor = async (req, res) => {
  try {
    const {
      name,
      specialization,
      experience,
      qualifications = [],
      profileImage,
      rating = 0,
      fee,
      cashback = 0,
      clinic,
      availableIn,
      location,
      modeOfConsult = [],
      languages = [],
    } = req.body;

    // Validate required fields
    if (
      !name || !specialization || experience == null || fee == null ||
      !clinic || !location || !modeOfConsult.length
    ) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    const doctor = new Doctor({
      name,
      specialization,
      experience,
      qualifications,
      profileImage,
      rating,
      fee,
      cashback,
      clinic,
      availableIn,
      location,
      modeOfConsult,
      languages,
    });

    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
// controllers/doctorController.js
exports.getDoctors = async (req, res) => {
  try {
    const { page = 1, limit = 10, filters = {} } = req.body;

    const { consultMode, experienceYears, fees, languages, search } = filters;

    const query = {};

    if (consultMode?.length) query.modeOfConsult = { $in: consultMode };
    if (experienceYears?.length) query.experience = { $in: experienceYears.map(Number) };
    
    if (fees?.length) {
      const feeRanges = fees.map((range) => {
        if (range === "100-500") return { $gte: 100, $lte: 500 };
        if (range === "500-1000") return { $gte: 500, $lte: 1000 };
        if (range === "1000+") return { $gte: 1000 };
        return null;
      }).filter(Boolean);
      
      if (feeRanges.length > 0) {
        query.$or = feeRanges.map(range => ({ fee: range }));
      }
    }

    if (languages?.length) query.languages = { $in: languages };
    if (search) query.name = { $regex: search, $options: "i" };

    const doctors = await Doctor.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Doctor.countDocuments(query);

    res.json({ total, doctors });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching doctors" });
  }
};

