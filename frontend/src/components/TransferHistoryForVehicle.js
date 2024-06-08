import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransferHistory } from '../redux/actions/transferActions';

const TransferHistoryForVehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const dispatch = useDispatch();
  const { transferHistory, loading, error } = useSelector(state => state.transfer);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchTransferHistory(vehicleNumber));
  };

  return (
    <div>
      <h2>Transfer History for Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vehicle Number:</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Fetching...' : 'Get Transfer History'}
        </button>
        {error && <p>Error: {error}</p>}
      </form>
      <div>
        <h3>History:</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {transferHistory.map(transfer => (
              <li key={transfer.id}>
                {transfer.vehicle_number} transferred from {transfer.from_driver_id} to {transfer.to_driver_id} on {new Date(transfer.createdAt).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TransferHistoryForVehicle;
