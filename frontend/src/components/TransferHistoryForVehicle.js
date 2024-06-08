import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransferHistory } from '../redux/actions/transferActions';
import TransferItem from './TransferItem';

const TransferHistoryForVehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const dispatch = useDispatch();
  const { transferHistory, loading, error } = useSelector(state => state.transfer);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchTransferHistory(vehicleNumber));
  };

  useEffect(() => {
    dispatch(fetchTransferHistory(""));
  },[dispatch])

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
      <div className="transfer-history">
      <h2>Transfer History</h2>
      <ul>
          {transferHistory.map(transfer => (
            <TransferItem key={transfer.id} transfer={transfer} />
          ))}
        </ul>
    </div>
    </div>
  );
};

export default TransferHistoryForVehicle;
