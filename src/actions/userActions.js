//exports
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = (email, token) => dispatch => {
      dispatch({ 
          type: LOGIN_SUCCESS,
          email: email,
          token: token });
}

export const logout = () => dispatch => {
    // Needs to forward to login, or landing page
    // Will need history props
    dispatch({ type: LOGOUT })
}