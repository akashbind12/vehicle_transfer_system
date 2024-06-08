const initialState = {
    transfers: [],
    transferHistory: [],
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
        case 'FETCH_REQUEST':
            return { 
                ...state, 
                loading: true, 
                error: null 
            };
        case 'FETCH_TRANSFER_HISTORY':
            return { 
                ...state, 
                transferHistory: action.payload, 
                loading: false,
                error: null  
            };
        case 'FETCH_FAILURE':
            return { 
                ...state, 
                loading: false, 
                transferHistory: [], 
                error: action.error 
            };
        default:
            return state;
    }
};

export default transferReducer;
