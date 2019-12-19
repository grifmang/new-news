import React from "react";
import { connect } from "react-redux";
import { login, logout } from "../../actions";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(prop) => (
      props.token
        ? <Component {...prop} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: prop.location }
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