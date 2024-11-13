const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');
const fuelRoutes = require('./routes/fuelRoutes');

dotenv.config();

const app = express();
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://sohad-git.github.io/React_Fuel_Report.io/'
  ],
  credentials: true
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/cars', carRoutes);
app.use('/api/fuel', fuelRoutes);

// Connect to MongoDB and start server

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));