import axios from 'axios';

export const fetchTransfers = () => async dispatch => {
  dispatch({ type: 'FETCH_TRANSFERS_REQUEST' });
  try {
    const response = await axios.get('/api/transfers');
    dispatch({ type: 'FETCH_TRANSFERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TRANSFERS_FAILURE', payload: error.message });
  }
};

export const transferVehicle = (transfer) => async dispatch => {
  dispatch({ type: 'TRANSFER_VEHICLE_REQUEST' });
  try {
    const response = await axios.post('/api/transfers', transfer);
    dispatch({ type: 'TRANSFER_VEHICLE_SUCCESS', payload: response.data });
    alert('Vehicle transfer successful');
  } catch (error) {
    dispatch({ type: 'TRANSFER_VEHICLE_FAILURE', payload: error.message });
    alert('Vehicle transfer failed');
  }
};


export const fetchTransferHistory = (vehicleNumber) => async dispatch => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const response = await axios.get(`/api/transfers/vehicle/${vehicleNumber}`);
      dispatch({ type: 'FETCH_TRANSFER_HISTORY', payload: response.data });
    } catch (error) {
        console.log("e:",error)
      dispatch({ type: 'FETCH_FAILURE', error: error.response.data.error });
    }
};
