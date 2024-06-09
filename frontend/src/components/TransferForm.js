import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transferVehicle } from '../redux/actions/transferActions';
import { fetchDrivers } from '../redux/actions/driverActions';
import { fetchVehicles } from '../redux/actions/vehicleActions';

const TransferForm = () => {
  const dispatch = useDispatch();

  const { drivers, loading: driversLoading, error: driversError } = useSelector(state => state.driver);
  const { vehicles, loading: vehiclesLoading, error: vehiclesError } = useSelector(state => state.vehicle);
  const { loading: transferLoading, error: transferError, success: transferSuccess } = useSelector(state => state.transfer);

  const [vehicleNumber, setVehicleNumber] = useState('');
  const [fromDriverId, setFromDriverId] = useState('');
  const [toDriverId, setToDriverId] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    dispatch(fetchDrivers());
    dispatch(fetchVehicles());
  }, [dispatch]);

  useEffect(() => {
    if (vehicleNumber) {
      const selected_vehicle = vehicles.find(v => v.vehicle_number === vehicleNumber);
      setSelectedVehicle(selected_vehicle);
      if (selected_vehicle && selected_vehicle.transfer_history.length > 0) {
        const lastTransfer = selected_vehicle.transfer_history[0];
        setFromDriverId(lastTransfer.to_driver_id);
      } else {
        setFromDriverId(null);
      }
    }
  }, [vehicles, vehicleNumber]);

  useEffect(() => {
    if (transferSuccess) {
      dispatch(fetchVehicles());  // Fetch the updated list of vehicles
      // Reset the form fields
      setVehicleNumber('');
      setFromDriverId('');
      setToDriverId('');
      setSelectedVehicle(null);
    }
  }, [transferSuccess, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(transferVehicle({ vehicle_number: vehicleNumber, from_driver_id: fromDriverId, to_driver_id: toDriverId })); 
  };

  if (driversLoading || vehiclesLoading) {
    return <div>Loading...</div>;
  }

  if (driversError || vehiclesError) {
    return <div>Error: {driversError || vehiclesError}</div>;
  }

  const fromDriver = drivers.find(driver => driver.id === fromDriverId);

  return (
    <div>
      <h2>Transfer Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vehicle Number:</label>
          <select value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required>
            <option value="">Select Vehicle</option>
            {vehicles.map(vehicle => (
              <option key={vehicle.vehicle_number} value={vehicle.vehicle_number}>{vehicle.vehicle_number}</option>
            ))}
          </select>
        </div>
        {selectedVehicle && selectedVehicle.transfer_history.length > 0 && fromDriver ? (
          <div>
            <label>From Driver:</label>
            <select value={fromDriverId} disabled>
              <option value={fromDriver.id}>{fromDriver.name}</option>
            </select>
          </div>
        ) : null}
        <div>
          <label>To Driver:</label>
          <select value={toDriverId} onChange={(e) => setToDriverId(e.target.value)} required>
            <option value="">Select Driver</option>
            {drivers.map(driver => (
              <option key={driver.id} value={driver.id}>{driver.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={transferLoading}>
          {transferLoading ? 'Transferring...' : 'Transfer'}
        </button>
        {transferError && <p className="error-message">Error: {transferError}</p>}
      </form>
    </div>
  );
};

export default TransferForm;
