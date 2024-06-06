import { combineReducers } from 'redux';
import driverReducer from './driverReducer';
import vehicleReducer from './vehicleReducer';
import transferReducer from './transferReducer';

const rootReducer = combineReducers({
  drivers: driverReducer,
  vehicles: vehicleReducer,
  transfers: transferReducer,
});

export default rootReducer;
