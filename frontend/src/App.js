// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DriverList from './components/DriverList';
import VehicleList from './components/VehicleList';
import TransferForm from './components/TransferForm';
import TransferHistory from './components/TransferHistory';
import AddDriver from './components/AddDriver';
import AddVehicle from './components/AddVehicle';
import TransferHistoryForVehicle from './components/TransferHistoryForVehicle';
import Navigation from './components/Navigation';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>Vehicle Transfer System</h1>
        <Navigation />
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
