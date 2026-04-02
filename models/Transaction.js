const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  montant: {
    type: Number,
    required: [true, 'Please add an amount']
  },
  methode: {
    type: String,
    enum: ['mobile', 'cash'],
    required: [true, 'Please add a payment method']
  },
  status: {
    type: String,
    enum: ['en attente', 'reussi', 'echec'],
    default: 'en attente'
  },
  qrCode_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QRCode',
    required: true,
    unique: true
  },
  user_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
