const Transaction = require('../models/Transaction');

// @desc    Create a transaction
// @route   POST /api/transactions
// @access  Public
exports.createTransaction = async (req, res) => {
  try {
    const { montant, methode, qrCode_Id, user_ID } = req.body;
    const transaction = await Transaction.create({ montant, methode, qrCode_Id, user_ID });
    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Public
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('qrCode_Id').populate('user_ID');
    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
