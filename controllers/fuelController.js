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
  