import React from 'react';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import LandingPage from "./components/Layout/LandingPage";
import PrivateRoute from "./components/Auth/PrivateRoutes";
import Profile from "./components/User/Profile";
import { Route } from "react-router-dom";
import YourNews from "./components/YourNews";
import Header from "./components/Layout/Header";
import './App.css';
import { connect } from "react-redux";
import { login, logout } from "./actions";

function App(props) {
  return (
    <>
    <Header />
    <Route exact path="/" component={LandingPage} />
    <PrivateRoute exact path="/YourNews" component={YourNews}  authed={props.token} />
    <PrivateRoute exact path="/profile" component={Profile}/>

    <Route exact path="/Login" component={Login} />
    <Route exact path="/Register" component={Register} />
    </>
  );
}

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
)(App);
