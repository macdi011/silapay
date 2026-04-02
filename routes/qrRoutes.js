const express = require('express');
const router = express.Router();
const { generateQRCode, getQRCode } = require('../controllers/qrController');

router.route('/generate').post(generateQRCode);
router.route('/:id').get(getQRCode);

module.exports = router;
