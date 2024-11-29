export const Patient = require('../models/patientModel');

// Create a new patient
const createPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: 'Patient registered successfully', patient: newPatient });
  } catch (err) {
    res.status(400).json({ message: 'Error registering patient', error: err.message });
  }
};

// Get all patients with pagination
const getPatients = async (req, res) => {
  const { page = 1, limit = 3, searchQuery = '' } = req.query;
  try {
    const patients = await Patient.find({ 
      $or: [
        { firstName: new RegExp(searchQuery, 'i') },
        { lastName: new RegExp(searchQuery, 'i') },
      ]
    })
    .skip((page - 1) * limit)
    .limit(Number(limit));

    const total = await Patient.countDocuments();
    res.status(200).json({ patients, total, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(400).json({ message: 'Error fetching patients', error: err.message });
  }
};

// Edit patient
const editPatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json({ message: 'Patient updated successfully', patient: updatedPatient });
  } catch (err) {
    res.status(400).json({ message: 'Error updating patient', error: err.message });
  }
};
module.exports = { createPatient, getPatients, editPatient };
