import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicles } from '../redux/actions/vehicleActions';

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
    <div>
      <h2>Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>{vehicle.vehicle_number} - {vehicle.vehicle_type}</li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
