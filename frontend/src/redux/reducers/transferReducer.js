const initialState = {
    transfers: [],
    loading: false,
    error: null
  };
  
  const transferReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TRANSFERS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_TRANSFERS_SUCCESS':
        return {
          ...state,
          transfers: action.payload,
          loading: false
        };
      case 'FETCH_TRANSFERS_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      case 'TRANSFER_VEHICLE_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'TRANSFER_VEHICLE_SUCCESS':
        return {
          ...state,
          transfers: [...state.transfers, action.payload],
          loading: false
        };
      case 'TRANSFER_VEHICLE_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default transferReducer;
  