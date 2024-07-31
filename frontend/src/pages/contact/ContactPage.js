import React from "react";
import styles from "../../styles/ContactPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactForm from "../../components/ContactForm";

//  component to render the contact page
const ContactPage = ({ showAlert }) => {
  return (
    <div className={styles.main}>
      <Container className="my-5">
        <Row>
          <h2 className="my-5">Contact Us</h2>
          <Col xs={12} lg={6}>
            <h4 className="mb-4">Address:</h4>
            <p>Address line 1</p>
            <p>Abergavenny</p>
            <p>Monmouthsire</p>
            <p>NP7 9TH</p>
          </Col>
          <Col xs={12} lg={6}>
            <h4 className="my-4">Phone Number:</h4>
            <p>07875922802</p>
            <h4 className="my-4">Email Address:</h4>
            <p>tomcostin@outlook.com</p>
          </Col>
        </Row>
        {/* render contact form */}
        <ContactForm showAlert={showAlert} />
      </Container>
    </div>
  );
};

export default ContactPage;
