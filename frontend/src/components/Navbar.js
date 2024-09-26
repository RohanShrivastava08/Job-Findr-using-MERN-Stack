import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';  

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand">
          Job Findr
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/jobs" className="nav-link">Job Listings</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="nav-link">Profile</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="nav-link">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className="nav-link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
