import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "../styles/NavBar.module.css";

// Component for rendering Navbar
const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={styles.Navbar}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home" className={`px-5 ${styles.Logo}`}>
            <i class="fa-solid fa-hammer pe-3"></i>
            TC Carpentry
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`ms-auto ${styles.navLinks}`}>
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <Nav.Link href="#pricing">Portfolio</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
