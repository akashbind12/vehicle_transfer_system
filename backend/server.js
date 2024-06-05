const express = require('express');
const bodyParser = require('body-parser');
const driverRoutes = require('./routes/driverRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const transferRoutes = require('./routes/transferRoutes');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api', driverRoutes);
app.use('/api', vehicleRoutes);
app.use('/api', transferRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
