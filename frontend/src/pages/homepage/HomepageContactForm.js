import React, { useState } from "react";
import axios from "axios";
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
  const [isSubmitting, setIsSubmitting] = useState(false); // To manage the loading state
  const [responseMessage, setResponseMessage] = useState(""); // To show the success or error message

  // handle change in form fields
  const handleChange = (event) => {
    setFormEmailData({
      ...formEmailData,
      [event.target.name]: event.target.value,
    });
  };

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    console.log("sending....");

    try {
      // Post to backend
      await axios.post("http://127.0.0.1:8000/send-email/", formEmailData);

      // handle response from backend
      setResponseMessage("Email sent successfully!");
      setFormEmailData({
        name: "",
        email: "",
        telephone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setResponseMessage("Failed to send email. Please try again.");
      console.log("Error sending email!", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/** Container for form */}
      <Container className={`my-5 ${styles.contactForm}`}>
        {/** background image for form */}
        <div className={styles.contactFormBackground}></div>
        {/** contact form */}
        <Form onSubmit={handleSubmit}>
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
          {/** Response message */}
          {responseMessage && (
            <Row>
              <Col xs={12}>
                <p>{responseMessage}</p>
              </Col>
            </Row>
          )}
          {isSubmitting && (
            <Row>
              <Col xs={12}>
                <p>Sending email...</p>
              </Col>
            </Row>
          )}
        </Form>
      </Container>
    </>
  );
};

export default HomepageContactForm;
