const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/qr', require('./routes/qrRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));

app.get('/', (req, res) => {
  res.send('SilaPay API is running...');
});

module.exports = app;
