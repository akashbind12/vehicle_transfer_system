const db = require('../models');
const Vehicle = db.Vehicle;

exports.createVehicle = async (req, res) => {
    try {
        const { vehicle_number, vehicle_type } = req.body;
        const puc_certificate = req.files['puc_certificate'] ? req.files['puc_certificate'][0].path : null;
        const insurance_certificate = req.files['insurance_certificate'] ? req.files['insurance_certificate'][0].path : null;
        const vehicle = await Vehicle.create({ vehicle_number, vehicle_type, puc_certificate, insurance_certificate });
        res.status(201).json(vehicle);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                { 
                    model: db.TransferHistory, 
                    as: 'transfer_history',
                    separate: true,
                    order: [['createdAt', 'DESC']],
                },
            ],
        });
        res.status(200).json(vehicles);
    } catch (error) {
        console.log("err:",error)
        res.status(400).json({ error: error.message });
    }
};
