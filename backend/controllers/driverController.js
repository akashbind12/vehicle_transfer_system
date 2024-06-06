const db = require('../models');
const Driver = db.Driver;

exports.createDriver = async (req, res) => {
    try {
        const { name, phone_number } = req.body;
        const profile_photo = req.file ? req.file.path : null;
        const driver = await Driver.create({ name, phone_number, profile_photo });
        res.status(201).json(driver);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
