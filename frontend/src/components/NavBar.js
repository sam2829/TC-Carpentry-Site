import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styles from "../styles/NavBar.module.css";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

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
          <Navbar.Brand to="/" className={`px-5 ${styles.Logo}`}>
            <i className="fa-solid fa-hammer pe-3"></i>
            TC Carpentry
          </Navbar.Brand>
          <Navbar.Toggle
            ref={ref}
            onClick={() => setExpanded(!expanded)}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`ms-auto ${styles.navLinks}`}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.Active}`
                    : styles.navLink
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.Active}`
                    : styles.navLink
                }
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.Active}`
                    : styles.navLink
                }
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.Active}`
                    : styles.navLink
                }
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.Active}`
                    : styles.navLink
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
