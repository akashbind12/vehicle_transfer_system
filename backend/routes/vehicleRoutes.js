const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/vehicles', vehicleController.createVehicle);
router.get('/vehicles', vehicleController.getAllVehicles);

module.exports = router;
