const initialState = {
    vehicles: [],
    loading: false,
    error: null
  };
  
  const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_VEHICLES_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_VEHICLES_SUCCESS':
        return {
          ...state,
          vehicles: action.payload,
          loading: false
        };
      case 'FETCH_VEHICLES_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      case 'ADD_VEHICLE_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'ADD_VEHICLE_SUCCESS':
        return {
          ...state,
          vehicles: [...state.vehicles, action.payload],
          loading: false
        };
      case 'ADD_VEHICLE_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default vehicleReducer;
  