const express = require('express');
const { addCar, getCars, deleteCar } = require('../controllers/carController');
const router = express.Router();

router.post('/', addCar);
router.get('/', getCars);
router.delete('/:id', deleteCar);

module.exports = router;
