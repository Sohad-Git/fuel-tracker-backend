const mongoose = require('mongoose');

const fuelRecordSchema = new mongoose.Schema({
  carName: { type: String, required: true },
  date: { type: Date, required: true },
  fuelType: { type: String, required: true },
  odometer: Number,
  distance: Number,
  liters: Number,
  totalPrice: Number,
  station: String,
  fullFill: Boolean
});

module.exports = mongoose.model('FuelRecord', fuelRecordSchema);
