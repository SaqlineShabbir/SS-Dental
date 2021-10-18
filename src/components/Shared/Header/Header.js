import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="container-fluid">
<Navbar bg="" expand="lg">
  <Container>
    <Navbar.Brand className="fw-bold" href="#home">Dental Care</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mx-auto">
        <Nav.Link className="fw-bold" href="#home">Home</Nav.Link>
        <Nav.Link className="fw-bold" href="#home">About</Nav.Link>
        <Nav.Link className="fw-bold" href="#home">Services</Nav.Link>
        <Nav.Link className="fw-bold" href="#home">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;