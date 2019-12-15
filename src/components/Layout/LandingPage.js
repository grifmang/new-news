import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";


const LandingPage = () => {

    return (
        <div className='main-container'>
            <div className='login-container'>
                <h4>Please login or Create an account.</h4>
                <div>
                    <Button tag={Link} to="/Login" color="primary" size="lg">Login</Button>{' '}
                    <Button tag={Link} to="/Register" color="secondary" size="lg">Register</Button>{' '}
                </div>
                
            </div>
        </div>
    )
}

export default LandingPage;