import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    }

    useEffect(() => {
        localStorage.getItem('token') ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }, [isLoggedIn])

    return (
        <div>
      <Navbar className='menu' light expand="md">
        <NavbarBrand className='logo' href="/YourNews">News</NavbarBrand>
          <Nav className="nav-links" navbar>
            {isLoggedIn
             ?
            <>
            {/* <NavItem>
              <NavLink href="/YourNews">Get News</NavLink>
            </NavItem> */}
            <NavItem>
              <Button onClick={logout}>Logout</Button>
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

export default Header;