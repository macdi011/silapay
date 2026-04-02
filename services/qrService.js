const QRCode = require('../models/QRCode');

/**
 * Service to handle QR code business logic
 */
const generateQRData = async (data) => {
  // Logic to generate QR code data (can use external library like qrcode)
  return `silapay://qr/${data.reference}`;
};

module.exports = {
  generateQRData
};
