const FuelRecord = require('../models/FuelRecord');

// Add a new fuel record
exports.addFuelRecord = async (req, res) => {
  try {
    const { carName, user, date, fuelType, odometer, distance, liters, totalPrice, station, fullFill } = req.body;

    // Validate required fields
    if (!carName || !user) {
      return res.status(400).json({ error: 'Car name and user are required' });
    }

    const record = new FuelRecord({ carName, user, date, fuelType, odometer, distance, liters, totalPrice, station, fullFill });
    await record.save();

    res.status(201).json(record);
  } catch (error) {
    console.error('Error adding fuel record:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get all fuel records for a specific car and user
exports.getFuelRecords = async (req, res) => {
  try {
    const { user, carName } = req.params;
    const records = await FuelRecord.find({ carName, user });
    res.json(records);
  } catch (error) {
    console.error('Error fetching fuel records:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Update an existing fuel record by ID
exports.updateFuelRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecord = await FuelRecord.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedRecord);
  } catch (error) {
    console.error('Error updating fuel record:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete a fuel record by ID
exports.deleteFuelRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecord = await FuelRecord.findByIdAndDelete(id);

    if (!deletedRecord) {
      return res.status(404).json({ error: 'Fuel record not found' });
    }

    res.status(200).json({ message: 'Fuel record deleted successfully' });
  } catch (error) {
    console.error('Error deleting fuel record:', error.message);
    res.status(500).json({ error: error.message });
  }
};
