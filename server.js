const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');
const fuelRoutes = require('./routes/fuelRoutes');

dotenv.config();

const app = express();
app.use(cors({origin: 'https://sohad-git.github.io/React_Fuel_Report.io/',credentials: true})); // Keep only one instance of CORS
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/cars', carRoutes);
app.use('/api/fuel', fuelRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error('MongoDB connection error:', err));
