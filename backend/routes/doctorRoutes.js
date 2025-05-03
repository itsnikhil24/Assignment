const express = require('express');
const router = express.Router();
const { addDoctor, getDoctors } = require('../controllers/doctorController');

router.post('/add-doctor', addDoctor);
router.post('/list-doctor-with-filter', getDoctors);

module.exports = router;
