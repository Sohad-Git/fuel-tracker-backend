const express = require('express');
const mongoose = require('mongoose');
const carRoutes = require('./routes/carRoutes');
const fuelRoutes = require('./routes/fuelRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/api/cars', carRoutes);
app.use('/api/fuel', fuelRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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
