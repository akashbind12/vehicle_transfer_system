// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/drivers">Drivers</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
        <li><Link to="/transfer">Transfer Vehicle</Link></li>
        <li><Link to="/transfers">Transfer History</Link></li>
        <li><Link to="/transfer-history">Vehicle Transfer History</Link></li>
        <li><Link to="/add-driver">Add Driver</Link></li>
        <li><Link to="/add-vehicle">Add Vehicle</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
