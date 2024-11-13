const express = require('express');
const { addFuelRecord, getFuelRecords, updateFuelRecord, deleteFuelRecord } = require('../controllers/fuelController');
const router = express.Router();

router.post('/', addFuelRecord);
router.get('/:user/:carName', getFuelRecords); // Get fuel records by user and carName
router.put('/:id', updateFuelRecord);
router.delete('/:id', deleteFuelRecord);

module.exports = router;
