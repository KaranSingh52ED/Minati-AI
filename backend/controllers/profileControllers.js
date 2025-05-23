const User = require('../models/User');
const mongoose = require('mongoose');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-otp -otpExpiry -password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return all user fields except sensitive ones
    res.status(200).json({
      _id: user._id,
      email: user.email,
      fullname: user.fullname,
      contact: user.contact,
      isVerified: user.isVerified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      __v: user.__v,
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

exports.searchUser = async (req, res) => {
  try {
    const { query } = req.body; // expecting { query: "searchValue" }

    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    let searchCriteria = {
      $or: [
        { fullname: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
        { contact: { $regex: query, $options: 'i' } },
      ],
    };

    // If valid ObjectId, include _id search
    if (mongoose.Types.ObjectId.isValid(query)) {
      searchCriteria.$or.push({ _id: query });
    }

    const users = await User.find(searchCriteria).select('-otp -otpExpiry -password');

    if (!users || users.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ users });
  } catch (err) {
    console.error('Error searching user:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
