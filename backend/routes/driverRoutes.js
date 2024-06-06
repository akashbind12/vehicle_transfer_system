const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const driverController = require('../controllers/driverController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

router.post('/', upload.single('profile_photo'), driverController.createDriver);
router.get('/', driverController.getDrivers);

module.exports = router;
