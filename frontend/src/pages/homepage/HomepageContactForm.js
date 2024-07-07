import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import styles from "../../styles/HomepageContactForm.module.css";
import ContactFormFields from "./ContactFormFields";

// component to render contact form on home page
const HomepageContactForm = () => {
  return (
    <>
      {/** Container for form */}
      <Container className={`mt-5 ${styles.contactForm}`}>
        {/** background image for form */}
        <div className={styles.contactFormBackground}></div>
        {/** contact form */}
        <Form>
          <h3 className="my-3">Get In Touch</h3>
          <Row>
            <Col xs={12} lg={6}>
              <ContactFormFields title="Name" type="text" name="name" />
            </Col>
            <Col xs={12} lg={6}>
              <ContactFormFields
                title="Email Address"
                type="email"
                name="email"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <ContactFormFields
                title="Telephone Number"
                type="tel"
                name="telephoneNumber"
              />
            </Col>
            <Col xs={12} lg={6}>
              <ContactFormFields title="Subject" type="text" name="subject" />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label className="my-3">Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default HomepageContactForm;
