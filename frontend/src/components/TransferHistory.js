import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransfers } from '../redux/actions/transferActions';
import { fetchDrivers } from '../redux/actions/driverActions';
import '../css/TransferHistory.css';
import TransferItem from './TransferItem';

const TransferHistory = () => {
  const dispatch = useDispatch();
  const { transfers, loading, error } = useSelector(state => state.transfer);
//   const { drivers } = useSelector(state => state.driver);

  useEffect(() => {
    dispatch(fetchTransfers());
    dispatch(fetchDrivers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading transfer history...</p>;
  }

  if (error) {
    return <p>Error loading transfer history: {error}</p>;
  }

  return (
    <div className="transfer-history">
      <h2>Transfer History</h2>
      <ul>
      {transfers.map(transfer => (
          <TransferItem key={transfer.id} transfer={transfer} />
        ))}
      </ul>
    </div>
  );
};

export default TransferHistory;
