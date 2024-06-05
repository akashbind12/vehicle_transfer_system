const TransferHistory = require('../models/transferHistory');
const Vehicle = require('../models/vehicle');
const Driver = require('../models/driver');

exports.transferVehicle = async (req, res) => {
  const { vehicle_number, from_driver_id, to_driver_id } = req.body;
  try {
    const transfer = await TransferHistory.create({
      vehicle_number,
      from_driver_id,
      to_driver_id,
    });
    res.status(201).json(transfer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTransferHistory = async (req, res) => {
  try {
    const transfers = await TransferHistory.findAll({
      include: [Vehicle, Driver],
    });
    res.status(200).json(transfers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
