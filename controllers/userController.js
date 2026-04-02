const User = require('../models/User');

// @desc    Create a user
// @route   POST /api/users
// @access  Public
exports.createUser = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const user = await User.create({ name, phone });
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Get all users
// @route   GET /api/users
// @access  Public
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
