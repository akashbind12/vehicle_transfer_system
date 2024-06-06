const db = require('../models');
const TransferHistory = db.TransferHistory;

exports.transferVehicle = async (req, res) => {
    try {
        const { vehicle_number, from_driver_id, to_driver_id } = req.body;
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

exports.getTransfers = async (req, res) => {
    try {
        const transfers = await TransferHistory.findAll({
            include: [
                { model: db.Driver, as: 'from_driver' },
                { model: db.Driver, as: 'to_driver' },
                { model: db.Vehicle, as: 'vehicle' },
            ],
        });
        res.status(200).json(transfers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTransferHistory = async (req, res) => {
  try {
      const { vehicle_number } = req.params;

      // Fetch transfer history for the specified vehicle number
      const transfers = await TransferHistory.findAll({
          where: { vehicle_number },
          order: [['createdAt', 'DESC']],
          include: [
            { model: db.Driver, as: 'from_driver' },
            { model: db.Driver, as: 'to_driver' },
            { model: db.Vehicle, as: 'vehicle' },
        ],
      });

      if (transfers.length === 0) {
          return res.status(404).json({ error: 'No transfer history found for this vehicle' });
      }

      res.status(200).json(transfers);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};
