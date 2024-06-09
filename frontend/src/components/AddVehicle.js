import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVehicle, fetchVehicles } from '../redux/actions/vehicleActions';

const AddVehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [pucCertificate, setPucCertificate] = useState(null);
  const [insuranceCertificate, setInsuranceCertificate] = useState(null);
  const dispatch = useDispatch();
  const { vehicles, loading, error } = useSelector(state => state.vehicle);

  const pucCertificateInputRef = useRef(null);
  const insuranceCertificateInputRef = useRef(null);

  const [prevVehiclesLength, setPrevVehiclesLength] = useState(vehicles.length);

  useEffect(() => {
    // Check if a new vehicle has been added
    if (vehicles.length > prevVehiclesLength) {
      // Reset form fields
      setVehicleNumber('');
      setVehicleType('');
      setPucCertificate(null);
      setInsuranceCertificate(null);
      pucCertificateInputRef.current.value = null; // Clear file input
      insuranceCertificateInputRef.current.value = null; // Clear file input
      setPrevVehiclesLength(vehicles.length); // Update the previous length
    }
  }, [vehicles, prevVehiclesLength]);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('vehicle_number', vehicleNumber);
    formData.append('vehicle_type', vehicleType);
    formData.append('puc_certificate', pucCertificate);
    formData.append('insurance_certificate', insuranceCertificate);
    dispatch(addVehicle(formData));
  };

  return (
    <div>
      <h2>Add Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vehicle Number</label>
          <input 
            type="text" 
            value={vehicleNumber} 
            onChange={(e) => setVehicleNumber(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Vehicle Type</label>
          <input 
            type="text" 
            value={vehicleType} 
            onChange={(e) => setVehicleType(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>PUC Certificate</label>
          <input 
            type="file" 
            ref={pucCertificateInputRef}
            onChange={(e) => setPucCertificate(e.target.files[0])} 
            required 
          />
        </div>
        <div>
          <label>Insurance Certificate</label>
          <input 
            type="file" 
            ref={insuranceCertificateInputRef}
            onChange={(e) => setInsuranceCertificate(e.target.files[0])} 
            required 
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Vehicle'}
        </button>
        {error && <p className="error-message">Error: {error}</p>}
      </form>
    </div>
  );
};

export default AddVehicle;
