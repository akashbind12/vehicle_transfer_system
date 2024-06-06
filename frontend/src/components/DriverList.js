import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDrivers } from '../redux/actions/driverActions';

const DriverList = () => {
  const dispatch = useDispatch();
  const { drivers, loading, error } = useSelector(state => state.driver);

  useEffect(() => {
    dispatch(fetchDrivers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading drivers...</p>;
  }

  if (error) {
    return <p>Error loading drivers: {error}</p>;
  }

  return (
    <div>
      <h2>Drivers</h2>
      <ul>
        {drivers.map(driver => (
          <li key={driver.id}>{driver.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;
