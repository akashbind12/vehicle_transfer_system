import axios from 'axios';

export const fetchDrivers = () => async dispatch => {
  dispatch({ type: 'FETCH_DRIVERS_REQUEST' });
  try {
    const response = await axios.get('/api/drivers');
    dispatch({ type: 'FETCH_DRIVERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DRIVERS_FAILURE', payload: error.message });
  }
};

export const addDriver = (driver) => async dispatch => {
  dispatch({ type: 'ADD_DRIVER_REQUEST' });
  try {
    const response = await axios.post('/api/drivers', driver);
    dispatch({ type: 'ADD_DRIVER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_DRIVER_FAILURE', payload: error.message });
  }
};
