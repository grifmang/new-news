import {
    LOGIN_SUCCESS,
    LOGOUT
    } from '../actions';
    
    const initialState = {
        email: '',
        token: '',
        isLoggedIn: false,
        error: ''
    };


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          email: action.email,
          token: action.token,
          isLoggedIn: true
        };
      case LOGOUT:
        return initialState;
      default:
        return state;
    }
  };
  
  export default usersReducer;