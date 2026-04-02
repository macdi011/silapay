const mongoose = require('mongoose');

const QRCodeSchema = new mongoose.Schema({
  montant: {
    type: Number,
    required: [true, 'Please add an amount']
  },
  reference: {
    type: String,
    required: [true, 'Please add a reference'],
    unique: true
  },
  status: {
    type: String,
    enum: ['en attente', 'payé', 'rejetté'],
    default: 'en attente'
  },
  User_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('QRCode', QRCodeSchema);
