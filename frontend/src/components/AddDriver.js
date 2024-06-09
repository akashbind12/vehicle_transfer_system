import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDriver, fetchDrivers } from '../redux/actions/driverActions';

const AddDriver = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const dispatch = useDispatch();
  const { drivers, loading, error } = useSelector(state => state.driver);

  const profilePhotoInputRef = useRef(null);

  const [prevDriversLength, setPrevDriversLength] = useState(drivers.length);

  useEffect(() => {
    if (drivers.length > prevDriversLength) {
      setName('');
      setPhoneNumber('');
      setProfilePhoto(null);
      if (profilePhotoInputRef.current) {
        profilePhotoInputRef.current.value = null; // Clear file input
      }
      setPrevDriversLength(drivers.length); // Update the previous length
    }
  }, [drivers.length, prevDriversLength]);

  useEffect(() => {
    dispatch(fetchDrivers());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone_number', phoneNumber);
    formData.append('profile_photo', profilePhoto);
    dispatch(addDriver(formData));
  };

  return (
    <div>
      <h2>Add Driver</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input 
            type="text" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Profile Photo</label>
          <input 
            type="file" 
            ref={profilePhotoInputRef}
            onChange={(e) => setProfilePhoto(e.target.files[0])} 
            required 
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Driver'}
        </button>
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default AddDriver;
