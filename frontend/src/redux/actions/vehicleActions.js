import axios from 'axios';

export const fetchVehicles = () => async dispatch => {
  dispatch({ type: 'FETCH_VEHICLES_REQUEST' });
  try {
    const response = await axios.get('/api/vehicles');
    dispatch({ type: 'FETCH_VEHICLES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_VEHICLES_FAILURE', payload: error.message });
  }
};

export const addVehicle = (vehicle) => async dispatch => {
  dispatch({ type: 'ADD_VEHICLE_REQUEST' });
  try {
    const response = await axios.post('/api/vehicles', vehicle);
    dispatch({ type: 'ADD_VEHICLE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_VEHICLE_FAILURE', payload: error.message });
  }
};
