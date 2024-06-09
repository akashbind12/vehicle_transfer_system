const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());
require('dotenv').config();
// console.log(":",process.env.PORT)

const db = require("./models")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const driverRoutes = require('./routes/driverRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const transferRoutes = require('./routes/transferRoutes');


// Routes
app.get("/", (req, res) => {
    res.json({ message: "vehicle_transfer_system backend"});
});
app.use('/api/drivers', driverRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/transfers', transferRoutes);


db.sequelize.sync().then((req) => {
    app.listen(3000, () => {
        console.log("server running at port 3000")
    })
})






