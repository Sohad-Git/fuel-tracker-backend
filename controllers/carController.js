const Car = require('../models/Car');

exports.addCar = async (req, res) => {
  try {
    const { carName, carModel, carYear, user } = req.body;
    if (!user) {
      return res.status(400).json({ error: 'User is required' });
    }
    const car = new Car({ carName, carModel, carYear, user });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCars = async (req, res) => {
  const { user } = req.params;
  try {
    // Fetch only cars associated with the logged-in user
    const cars = await Car.find({ user });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
