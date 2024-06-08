import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DriverList from './components/DriverList';
import VehicleList from './components/VehicleList';
import TransferForm from './components/TransferForm';
import TransferHistory from './components/TransferHistory';
import AddDriver from './components/AddDriver';
import AddVehicle from './components/AddVehicle';
import TransferHistoryForVehicle from './components/TransferHistoryForVehicle';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Vehicle Transfer System</h1>
        <nav>
          <ul>
            <li><Link to="/drivers">Drivers</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/transfer">Transfer Vehicle</Link></li>
            <li><Link to="/transfers">Transfer History</Link></li>
            <li><Link to="/add-driver">Add Driver</Link></li>
            <li><Link to="/add-vehicle">Add Vehicle</Link></li>
            <li><Link to="/transfer-history">Vehicle Transfer History</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/drivers" element={<DriverList />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/transfer" element={<TransferForm />} />
          <Route path="/transfers" element={<TransferHistory />} />
          <Route path="/add-driver" element={<AddDriver />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/transfer-history" element={<TransferHistoryForVehicle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
