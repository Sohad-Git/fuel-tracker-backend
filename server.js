const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Added CORS import
const carRoutes = require('./routes/carRoutes');
const fuelRoutes = require('./routes/fuelRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Added CORS middleware to allow cross-origin requests
app.use(cors());
app.use(express.json());

// Route setup
app.use('/api/cars', carRoutes);
app.use('/api/fuel', fuelRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

mongoose.set('strictQuery', false);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });
