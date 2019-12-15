import React from "react";
import { connect } from "react-redux";
import { login, logout } from "../../actions";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      props.isLoggedIn
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )

  const mapStateToProps = state => {
    return {
      email: state.users.email,
      token: state.users.token,
      isLoggedIn: state.users.isLoggedIn,
      error: state.users.error
    };
  };
  
  export default connect(
    mapStateToProps,
    {login, logout}
  )(PrivateRoutes);