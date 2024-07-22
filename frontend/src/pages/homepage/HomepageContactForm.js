import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import styles from "../../styles/HomepageContactForm.module.css";
import ContactFormFields from "./ContactFormFields";
import CustomButton from "../../components/CustomButton";

// component to render contact form on home page
const HomepageContactForm = () => {
  // State for form input fields
  const [formEmailData, setFormEmailData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });
  const { name, email, telephone, subject, message } = formEmailData;

  // handle change in form fields
  const handleChange = (event) => {
    setFormEmailData({
      ...formEmailData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {/** Container for form */}
      <Container className={`my-5 ${styles.contactForm}`}>
        {/** background image for form */}
        <div className={styles.contactFormBackground}></div>
        {/** contact form */}
        <Form>
          <h3 className="my-3">Get In Touch</h3>
          <Row>
            <Col xs={12} lg={6}>
              <ContactFormFields
                title="Name"
                type="text"
                name="name"
                value={name}
                handleChange={handleChange}
              />
            </Col>
            <Col xs={12} lg={6}>
              <ContactFormFields
                title="Email Address"
                type="email"
                name="email"
                value={email}
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <ContactFormFields
                title="Telephone Number"
                type="tel"
                name="telephone"
                value={telephone}
                handleChange={handleChange}
              />
            </Col>
            <Col xs={12} lg={6}>
              <ContactFormFields
                title="Subject"
                type="text"
                name="subject"
                value={subject}
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label className="my-3">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={message}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <div className="mt-5">
              <CustomButton title="Send" formButton />
            </div>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default HomepageContactForm;
