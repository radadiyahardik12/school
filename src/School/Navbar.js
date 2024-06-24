import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"

const Navbar_top = () => {
  return (
    <>
       <Navbar bg="light" className="navbar">
      <Container className="top_header">
        <div className="img_img">
          <img src="img/Vector.png" alt="img" />
          {/* <h6>Ik </h6> */}
        </div>
        <Nav className="me-auto">
          <Nav.Link href="#home">About us</Nav.Link>
          <Nav.Link href="#features">Services</Nav.Link>
          <Nav.Link href="#pricing">Case Studies</Nav.Link>
          <Nav.Link href="#features">Blog</Nav.Link>
          <Nav.Link href="#features">How it Works</Nav.Link>
          <Nav.Link href="#features">Hire</Nav.Link>
          <Button className="button" type="submit">Contact us</Button>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
};

export default Navbar_top;
