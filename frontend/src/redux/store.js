import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import driverReducer from './reducers/driverReducer';
import vehicleReducer from './reducers/vehicleReducer';
import transferReducer from './reducers/transferReducer';

const rootReducer = combineReducers({
  driver: driverReducer,
  vehicle: vehicleReducer,
  transfer: transferReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
