const Car = require('../models/Car');

// Controller to add a new car
const addCar = async (req, res) => {
  try {
    const { carName, carModel, carYear, user } = req.body;

    // Validate required fields
    if (!carName || !carModel || !carYear || !user) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new car document
    const car = new Car({ carName, carModel, carYear, user });
    await car.save();

    res.status(201).json(car);
  } catch (error) {
    console.error('Error adding car:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Controller to get cars associated with a specific user
const getCars = async (req, res) => {
  try {
    const { user } = req.params;
    if (!user) {
      return res.status(400).json({ error: 'User is required' });
    }

    const cars = await Car.find({ user });

    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a car by ID
const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the car ID is provided
    if (!id) {
      return res.status(400).json({ error: 'Car ID is required' });
    }

    const deletedCar = await Car.findByIdAndDelete(id);

    // If no car is found with the given ID
    if (!deletedCar) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    console.error('Error deleting car:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Correctly exporting all controllers
module.exports = {
  addCar,
  getCars,
  deleteCar,
};
