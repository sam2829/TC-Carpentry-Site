import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "../styles/NavBar.module.css";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import NavBarNavLink from "./NavBarNavLink";

// Component for rendering Navbar
const NavBar = () => {
  // This is so we can toggle the hamburger menu
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  return (
    <>
      <Navbar
        expanded={expanded}
        collapseOnSelect
        expand="lg"
        className={styles.NavBar}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href='/' className={`px-5 ${styles.Logo}`}>
            <i className="fa-solid fa-hammer pe-3"></i>
            TC Carpentry
          </Navbar.Brand>
          <Navbar.Toggle
            ref={ref}
            onClick={() => setExpanded(!expanded)}
            aria-controls="responsive-navbar-nav"
            className={styles.MenuIcon}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`ms-auto ${styles.navLinks}`}>
              {/** Nav Links in Navbar */}
              <NavBarNavLink title='Home' to='/' />
              <NavBarNavLink title='Services' to='/services' />
              <NavBarNavLink title='Portfolio' to='/portfolio' />
              <NavBarNavLink title='About Us' to='/about' />
              <NavBarNavLink title='Contact Us' to='/contact' />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
