const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const QRCode = require('./models/QRCode');
const Transaction = require('./models/Transaction');

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connecté à MongoDB pour le seeding...');

    // 1. Nettoyer la base (optionnel - décommentez si vous voulez repartir à zéro)
    // await User.deleteMany();
    // await QRCode.deleteMany();
    // await Transaction.deleteMany();

    // 2. Créer un Utilisateur
    const user = await User.create({
      name: 'Cellou Diallo',
      phone: '0612345678'
    });
    console.log('Utilisateur créé:', user.name);

    // 3. Créer un QR Code pour cet utilisateur
    const qrcode = await QRCode.create({
      montant: 5000,
      reference: 'REF-' + Date.now(),
      status: 'en attente',
      User_ID: user._id
    });
    console.log('QR Code créé pour:', qrcode.montant, 'GNF');

    // 4. Créer une Transaction pour ce QR Code
    const transaction = await Transaction.create({
      montant: 5000,
      methode: 'mobile',
      status: 'completed',
      qrCode_Id: qrcode._id,
      user_ID: user._id
    });
    console.log('Transaction créée avec succès!');

    console.log('\n--- Données insérées avec succès ! ---');
    process.exit();
  } catch (error) {
    console.error('Erreur lors de l\'insertion:', error);
    process.exit(1);
  }
};

seedData();
