import React from 'react';
import './css/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavbarCom = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page after sign out
  };

  const isLoggedIn = !!localStorage.getItem('token'); // Check if the user is logged in

  return (
    <Navbar expand="lg" className="bg-body-tertiary fotertext">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Online Pharmacy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 p-2" navbarScroll>
            <Nav.Link as={Link} to="/Medicines" className="ms-2">Medicines</Nav.Link>
            <Nav.Link as={Link} to="/cardForAll/Personal Care" className="ms-2">Personal Care</Nav.Link>
            <Nav.Link as={Link} to="/cardForAll/Baby Care" className="ms-2">Baby Care</Nav.Link>
            <Nav.Link as={Link} to="/cardForAll/Lifestyle & Fitness" className="ms-2">Lifestyle & Fitness</Nav.Link>
            <Nav.Link as={Link} to="/cardForAll/Organic" className="ms-2">Organic</Nav.Link>
            <Nav.Link as={Link} to="/cardForAll/Medical Equipments" className="ms-2">Healthcare Devices</Nav.Link>
            <Nav.Link as={Link} to="/CartPage" className="ms-2">Order</Nav.Link>
          </Nav>
          {/* <Form className="d-flex me-2">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          {isLoggedIn ? (
            <Button variant="outline-danger" onClick={handleSignOut}>Sign Out</Button>
          ) : (
            <Button as={Link} to='/login' variant="outline-success">Log In</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCom;
