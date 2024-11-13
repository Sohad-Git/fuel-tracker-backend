const express = require('express');
const { addCar, getCars, deleteCar } = require('../controllers/carController');
const router = express.Router();

router.post('/', addCar);
router.get('/:user', getCars); // Get cars by user
router.delete('/:id', deleteCar);

module.exports = router;
