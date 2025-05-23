const User = require('../models/User');
const { encrypt, decrypt } = require('../utils/crypto');
const { sendOTP } = require('../utils/mailer');
const { generateToken } = require('../utils/jwt');

exports.register = async (req, res) => {
  const { email, password, fullname, contact } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const encryptedPass = encrypt(password);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const encryptedOTP = encrypt(otp);
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 min

    const user = await User.create({
      email,
      fullname,
      contact,
      password: encryptedPass,
      otp: encryptedOTP,
      otpExpiry,
    });

    await sendOTP(email, otp);
    res.status(200).json({ message: 'OTP sent for verification' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (new Date() > user.otpExpiry) return res.status(400).json({ error: 'OTP expired' });

    const decryptedOTP = decrypt(user.otp);
    if (decryptedOTP !== otp) return res.status(400).json({ error: 'Invalid OTP' });

    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !user.isVerified)
      return res.status(400).json({ error: "User not verified or doesn't exist" });

    const decryptedPass = decrypt(user.password);
    if (decryptedPass !== password) return res.status(400).json({ error: 'Incorrect password' });

    const token = generateToken(user);
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = encrypt(otp);
    user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
    await user.save();

    await sendOTP(email, otp);
    res.status(200).json({ message: 'OTP sent to email for password reset' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const decryptedOTP = decrypt(user.otp);
    if (new Date() > user.otpExpiry) return res.status(400).json({ error: 'OTP expired' });
    if (decryptedOTP !== otp) return res.status(400).json({ error: 'Invalid OTP' });

    user.password = encrypt(newPassword);
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.resendOTP = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = encrypt(otp);
    user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
    await user.save();

    await sendOTP(email, otp);
    res.status(200).json({ message: 'New OTP sent' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
