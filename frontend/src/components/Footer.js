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
          <h4 className="my-3">Tom Costin Carpentry</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <p>Ysgubor Derwen Fawr</p>
          <p>Bryngwyn</p>
          <p>Raglan</p>
          <p>Monmouthshire</p>
          <p>NP15 2DD</p>
        </Col>
        <Col xs={12} md={6} className="mt-4 pt-3">
          <p>Tom-Costin@live.co.uk</p>
          <p>07875922802</p>
        </Col>
      </Row>
      {/* icons */}
      <Row className="justify-content-center">
        <Col xs={1} className={styles.Icon}>
          <a
            href="mailto: Tom-Costin@live.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </Col>
        <Col xs={1} className={styles.Icon}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </Col>
        <Col xs={1} className={styles.Icon}>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
