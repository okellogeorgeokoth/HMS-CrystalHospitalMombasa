import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Patient schema
const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  country: { type: String, default: 'Kenya' },
  county: { type: String, default: 'Juja sub county' },
  bloodGroup: String,
  gender: { type: String, required: true },
  kinFirstName: String,
  kinLastName: String,
  kinPhoneNumber: String,
  insuranceCompany: String,
  insurancePolicyNumber: String,
}, { timestamps: true });

module.exports = mongoose.Mongoose.model('Patient', patientSchema);
export default Patient;