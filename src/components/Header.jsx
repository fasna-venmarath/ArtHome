import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
  

function Header() {
  return (
   <>
         <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
        //   onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar >
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
              <Link to="/dashboard">DashBoard</Link>  
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><Link to={"/login"}>Login</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><Link to={"/register"}>Register</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink href='#'> <Link to={"/cart"}>Cart</Link></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}

export default Header