import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicles } from '../redux/actions/vehicleActions';
import '../css/VehicleList.css'; // Import the CSS file

const VehicleList = () => {
  const dispatch = useDispatch();
  const { vehicles, loading, error } = useSelector(state => state.vehicle);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  if (loading) {
    return <p>Loading vehicles...</p>;
  }

  if (error) {
    return <p>Error loading vehicles: {error}</p>;
  }

  return (
    <div className="vehicle-list">
      <h2>Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id} className="vehicle-item">
            <div className="vehicle-info">
              <p className="vehicle-number"><strong>Vehicle Number:</strong> {vehicle.vehicle_number}</p>
              <p className="vehicle-type"><strong>Vehicle Type:</strong> {vehicle.vehicle_type}</p>
              <p className="vehicle-created"><strong>Created At:</strong> {new Date(vehicle.createdAt).toLocaleString()}</p>
              <p className="vehicle-updated"><strong>Updated At:</strong> {new Date(vehicle.updatedAt).toLocaleString()}</p>
              <p className="vehicle-puc"><strong>PUC Certificate:</strong> 
                <a href={`http://localhost:3000/${vehicle.puc_certificate}`} target="_blank" rel="noopener noreferrer">Download</a>
              </p>
              <p className="vehicle-insurance"><strong>Insurance Certificate:</strong> 
                <a href={`http://localhost:3000/${vehicle.insurance_certificate}`} target="_blank" rel="noopener noreferrer">Download</a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
