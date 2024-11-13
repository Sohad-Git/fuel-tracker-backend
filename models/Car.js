const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carName: { type: String, required: true, unique: true },
  carModel: { type: String, required: true },
  carYear: { type: String, required: true }
});

module.exports = mongoose.model('Car', carSchema);
