import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransfers } from '../redux/actions/transferActions';

const TransferHistory = () => {
  const dispatch = useDispatch();
  const { transfers, loading, error } = useSelector(state => state.transfer);

  useEffect(() => {
    dispatch(fetchTransfers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading transfer history...</p>;
  }

  if (error) {
    return <p>Error loading transfer history: {error}</p>;
  }

  return (
    <div>
      <h2>Transfer History</h2>
      <ul>
        {transfers.map(transfer => (
          <li key={transfer.id}>
            Vehicle {transfer.vehicle_number} transferred from Driver {transfer.from_driver_id} to Driver {transfer.to_driver_id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransferHistory;
