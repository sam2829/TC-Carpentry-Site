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
      <Container className={`${styles.infoSection} my-5`}>
        <Row>
          <h2 className="mt-5">Contact Us</h2>
          <p className={`${styles.Message} my-3`}>
            We’d love to hear from you! Whether you have questions about our
            services, need a free quote, or want to discuss your upcoming
            project, feel free to contact us. Our team is here to assist you
            with any inquiries you may have and ensure that your experience with
            TC Carpentry is as smooth and enjoyable as possible. Below you’ll
            find our contact details. We look forward to connecting with you!
          </p>
        </Row>
        <Row className="mt-5">
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
        <Row>
          <p className="my-5">
            You can also contact us by filling out the form below.
          </p>
        </Row>
        {/* render contact form */}
        <ContactForm showAlert={showAlert} />
      </Container>
    </div>
  );
};

export default ContactPage;
