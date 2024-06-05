const Vehicle = require('../models/vehicle');

exports.createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
