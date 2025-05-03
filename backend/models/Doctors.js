// models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  qualifications: {
    type: [String],
    default: [],
  },
  profileImage: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  fee: {
    type: Number,
    required: true,
  },
  cashback: {
    type: Number,
    default: 0,
  },
  clinic: {
    type: String,
    required: true,
  },
  availableIn: {
    type: String, // e.g., "Morning", "Evening"
  },
  location: {
    type: String,
  },
  modeOfConsult: {
    type: [String], // e.g., ["Online", "Hospital"]
    enum: ["Online", "Hospital"],
    default: [],
  },
  languages: {
    type: [String], // e.g., ["English", "Hindi"]
    default: [],
  },
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
