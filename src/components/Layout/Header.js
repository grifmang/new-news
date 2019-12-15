import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';
  import { connect } from "react-redux";
  import { login, logout } from "../../actions";

const Header = (props) => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     localStorage.getItem('token') ? setIsLoggedIn(true) : setIsLoggedIn(false)
    // }, [isLoggedIn])

    return (
        <div>
      <Navbar className='menu' light expand="md">
        <NavbarBrand className='logo' href="/YourNews">News</NavbarBrand>
          <Nav className="nav-links" navbar>
            {props.isLoggedIn
             ?
            <>
            {/* <NavItem>
              <NavLink href="/YourNews">Get News</NavLink>
            </NavItem> */}
            <NavItem>
              <Button onClick={props.logout}>Logout</Button>
            </NavItem>
            </>
            :
            <>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            </>}
          </Nav>
      </Navbar>
    </div>
    )
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
)(Header);