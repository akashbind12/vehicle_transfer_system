const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');

router.post('/transfers', transferController.transferVehicle);
router.get('/transfers', transferController.getTransferHistory);

module.exports = router;
