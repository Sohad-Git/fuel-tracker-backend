const express = require('express');
const { addCar, getCars, deleteCar } = require('../controllers/carController');
const router = express.Router();

// Log to check if the functions are correctly imported
console.log('Controllers:', { addCar, getCars, deleteCar });

router.post('/', addCar);
router.get('/:user', getCars);
router.delete('/:id', deleteCar);

module.exports = router;
