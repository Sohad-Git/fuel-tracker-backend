const Car = require('../models/Car');

exports.addCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

exports.deleteCar = async (req, res) => {
  const { id } = req.params;
  await Car.findByIdAndDelete(id);
  res.status(200).json({ message: 'Car deleted' });
};