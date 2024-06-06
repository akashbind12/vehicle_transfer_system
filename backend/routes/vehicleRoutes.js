const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const vehicleController = require('../controllers/vehicleController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

router.post('/', upload.fields([{ name: 'puc_certificate' }, { name: 'insurance_certificate' }]), vehicleController.createVehicle);
router.get('/', vehicleController.getVehicles);

module.exports = router;
