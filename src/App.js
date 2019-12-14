import React from 'react';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import LandingPage from "./components/LandingPage";
import PrivateRoute from "./components/Auth/PrivateRoutes";
import Profile from "./components/User/Profile";
import { Route } from "react-router-dom";
import YourNews from "./components/YourNews";
import './App.css';
import { connect } from "react-redux";
import { getNYT } from "./actions";

function App() {
  return (
    <>
    <Route exact path="/" component={LandingPage} />
    <PrivateRoute exact path="/YourNews" component={YourNews} />
    <PrivateRoute exact path="/profile" component={Profile} />

    <Route exact path="/Login" component={Login} />
    <Route exact path="/Register" component={Register} />
    </>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNYT }
)(App);
