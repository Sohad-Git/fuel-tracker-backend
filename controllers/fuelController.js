const FuelRecord = require('../models/FuelRecord');

exports.updateFuelRecord = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedRecord = await FuelRecord.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(updatedRecord);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  exports.addFuelRecord = async (req, res) => {
  try {
    const record = new FuelRecord(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFuelRecords = async (req, res) => {
  try {
    const { carName } = req.params;
    const records = await FuelRecord.find({ carName });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteFuelRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecord = await FuelRecord.findByIdAndDelete(id);

    if (!deletedRecord) {
      return res.status(404).json({ error: 'Fuel record not found' });
    }

    res.status(200).json({ message: 'Fuel record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
