// 🌍 Load Environment Variables
require('dotenv').config();

// 🧱 Core Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// 🧩 Custom Modules
const connectDB = require('./config/db');

// 🚀 App Initialization
const app = express();
const PORT = process.env.PORT || 8080;

// 🔌 Connect to MongoDB
connectDB();

// 🛡️ Middleware Configuration
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // HTTP request logger
app.use(helmet()); // Set secure HTTP headers

// 📁 Route Imports (Uncomment when routes are ready)

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
// 🔗 API Route Mounting (Uncomment when routes are imported)
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// 🩺 Health Check Endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: '✅ API is running smoothly!' });
});

// ❗ Global Error Handler
app.use((err, req, res, next) => {
  console.error('❌ Internal Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

module.exports = app;
