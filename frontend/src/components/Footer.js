import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../styles/Footer.module.css";

// component to render footer
const Footer = () => {
  return (
    <section className={styles.Footer}>
      <Row>
        <Col xs={12}>
          <h4 className="my-5">TC Carpentry</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <p>Address line 1</p>
          <p>Abergavenny</p>
          <p>Monmouthshire</p>
          <p>NP7 5SD</p>
        </Col>
        <Col xs={12} md={6} className="mt-4 pt-3">
          <p>TomCostin@outlook.com</p>
          <p>07875922802</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={1} className={styles.Icon}>
          <i class="fa-solid fa-envelope"></i>
        </Col>
        <Col xs={1} className={styles.Icon}>
          <i class="fa-brands fa-facebook"></i>
        </Col>
        <Col xs={1} className={styles.Icon}>
          <i class="fa-brands fa-linkedin"></i>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
