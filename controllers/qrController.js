const QRCode = require('../models/QRCode');
const qrService = require('../services/qrService');

// @desc    Generate a new QR Code
// @route   POST /api/qr/generate
// @access  Public
exports.generateQRCode = async (req, res) => {
  try {
    const { montant, User_ID, reference } = req.body;
    const qrCode = await QRCode.create({ montant, User_ID, reference });
    res.status(201).json({ success: true, data: qrCode });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Get QR Code by ID
// @route   GET /api/qr/:id
// @access  Public
exports.getQRCode = async (req, res) => {
  try {
    const qrCode = await QRCode.findById(req.params.id);
    if (!qrCode) {
      return res.status(404).json({ success: false, error: 'QR Code not found' });
    }
    res.status(200).json({ success: true, data: qrCode });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
