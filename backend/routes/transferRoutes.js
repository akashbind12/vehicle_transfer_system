const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');

router.post('/', transferController.transferVehicle);
router.get('/', transferController.getTransfers);
router.get('/vehicle/:vehicle_number', transferController.getTransferHistory);

module.exports = router;
