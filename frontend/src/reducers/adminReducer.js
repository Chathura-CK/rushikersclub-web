const initialState = {
    users: [],
    settings: {},
  };
  
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return { ...state, users: action.payload };
      case 'UPDATE_SETTINGS':
        return { ...state, settings: action.payload };
      default:
        return state;
    }
  };
  
  export default adminReducer;