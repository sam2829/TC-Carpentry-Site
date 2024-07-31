import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import styles from "../styles/ContactForm.module.css";
import ContactFormFields from "./ContactFormFields";
import CustomButton from "./CustomButton";

// component to render contact form on home page
const ContactForm = ({ showAlert }) => {
  // State for form input fields
  const [formEmailData, setFormEmailData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });
  const { name, email, telephone, subject, message } = formEmailData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

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
      showAlert("success", `Your email was successfully sent!`);
      setFormEmailData({
        name: "",
        email: "",
        telephone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      showAlert(
        "success",
        `Error sending email. Please check contact form for errors and try again.`
      );
      setErrors(err.response.data.errors || {});
      console.log("Error sending email!", err);
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
                errors={errors}
              />
            </Col>
            <Col xs={12} lg={6}>
              <ContactFormFields
                title="Email Address"
                type="email"
                name="email"
                value={email}
                handleChange={handleChange}
                errors={errors}
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
                errors={errors}
              />
            </Col>
            <Col xs={12} lg={6}>
              <ContactFormFields
                title="Subject"
                type="text"
                name="subject"
                value={subject}
                handleChange={handleChange}
                errors={errors}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ContactFormFields
                title="Message"
                as="textarea"
                name="message"
                value={message}
                handleChange={handleChange}
                errors={errors}
                rows={5}
              />
            </Col>
          </Row>
          <Row>
            {/** Form submit button */}
            <div className="mt-5">
              <CustomButton
                title={isSubmitting ? "Sending..." : "Send"}
                formButton
                isSubmitting={isSubmitting}
              />
            </div>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default ContactForm;
