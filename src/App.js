import React from 'react';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Route exact path="/" component={LandingPage} />

    <Route exact path="/Login" component={Login} />
    <Route exact path="/Register" component={Register} />
    </>
  );
}

export default App;
