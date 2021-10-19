import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
  const {user,logOut} = useAuth()
    return (
        <div className="container-fluid">
<Navbar  bg="" expand="lg">
  <Container>
    <Navbar.Brand className="fw-bold " href="#home">SS<span className="my-color"> Dental</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mx-auto ">
        <Nav.Link as={HashLink} to="/home#home" className="fw-bold  " >Home</Nav.Link>
        <Nav.Link as={Link} to="/about" className="fw-bold mx-5" >About</Nav.Link>
        <Nav.Link as={HashLink} to="/home#services" className="fw-bold" >Services</Nav.Link>
        <Nav.Link as={Link} to="/contact" className="fw-bold ms-5" >Contact Us</Nav.Link>

        <Nav.Link as={Link} to="/login" className="fw-bold mx-5" >LogIn</Nav.Link>
        { 
          user.email?
          <Link to="/signup">   <button onClick={logOut} className="signup-button ">Log Out</button></Link>
          :
        <Link to="/signup">   <button className="signup-button ">Sign Up</button></Link>
       }
       { user.email &&
           <div className="d-flex">
           <img className="user-img" src={user?.photoURL} alt="" />
           <p className="mt-1 ms-2">{user?.displayName}</p>
           </div>
       }
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;