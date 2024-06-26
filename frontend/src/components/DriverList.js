import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDrivers } from '../redux/actions/driverActions';
import '../css/DriverList.css';

const DriverList = () => {
  const dispatch = useDispatch();
  const { drivers, loading, error } = useSelector(state => state.driver);
  const baseUrl = process.env.REACT_APP_BASE_URL;  
  const defaultProfilePhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRii9A7ErPEuec7Y6k6UJONLW2sbq9hKVB8Iw&s';

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
    <div className="driver-list">
      <h2>Drivers</h2>
      <ul>
        {drivers.map(driver => (
          <li key={driver.id} className="driver-item">
            <img 
              src={`${baseUrl}/${driver.profile_photo}`} 
              alt={`${driver.name}'s profile`} 
              className="profile-photo" 
              onError={(e) => { e.target.src = defaultProfilePhoto; }} 
            />
            <div className="driver-info">
              <p className="driver-id"><strong>ID:</strong> {driver.id}</p>
              <p className="driver-name"><strong>Name:</strong> {driver.name}</p>
              <p className="driver-phone"><strong>Phone:</strong> {driver.phone_number}</p>
              <p className="driver-created"><strong>Created At:</strong> {new Date(driver.createdAt).toLocaleString()}</p>
              <p className="driver-updated"><strong>Updated At:</strong> {new Date(driver.updatedAt).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;
