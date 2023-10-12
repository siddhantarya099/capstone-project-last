import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSignInAlt } from 'react-icons/fa';


const TopNavbar = ({onLogin}) => {
  const navbarStyle = {
    backgroundColor: '#5a287d', // Set the background color to #5a287d
  };
  const customBrandStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  const iconStyle = {
    marginRight: '8px', // Adjust the margin as needed
  };
  return (
    
    <Navbar style={navbarStyle} expand="lg" variant="dark" >
      <Container>
        <NavLink to="/natwestlogo" className="navbar-brand" style={customBrandStyle}>
        <img
            src="https://th.bing.com/th/id/OIP.aXME-cZqYY0vpyOnLG8nRgHaHa?pid=ImgDet&rs=1"
            alt="NatWest Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          NatWest Loans</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/faq" className="nav-link">FAQs</NavLink>
            <NavLink to="/emiCalculator" className="nav-link">EMI Calculator</NavLink>
            <NavLink to="/customerSupport" className="nav-link">Customer Support</NavLink>
          </Nav>
          <Nav>
          <Link to="/login" className="btn btn-light" style={{ backgroundColor: '#5a287d', color: 'white' }}  onClick={onLogin}>
             <FaSignInAlt style={iconStyle} /> Login
            </Link>
            <Link to="/register" className="btn btn-light" style={{ backgroundColor: '#5a287d', color: 'white' }}>
              Register <FaSignInAlt style={iconStyle} />
            </Link>

            {/* <button className="btn btn-light" style={{ backgroundColor: '#5a287d', color: 'white' }}>
            <FaSignInAlt style={iconStyle}/>Login</button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default TopNavbar