const initialState = {
    drivers: [],
    loading: false,
    error: null
  };
  
  const driverReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DRIVERS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_DRIVERS_SUCCESS':
        return {
          ...state,
          drivers: action.payload,
          loading: false
        };
      case 'FETCH_DRIVERS_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      case 'ADD_DRIVER_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'ADD_DRIVER_SUCCESS':
        return {
          ...state,
          drivers: [...state.drivers, action.payload],
          loading: false
        };
      case 'ADD_DRIVER_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default driverReducer;
  