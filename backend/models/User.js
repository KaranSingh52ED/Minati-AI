const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  contact: { type: String, required: true },
  password: { type: String },
  otp: String,
  otpExpiry: Date,
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
