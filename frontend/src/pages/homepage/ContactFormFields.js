import React from "react";
import Form from "react-bootstrap/Form";

// component to render input field for home page contact form
const ContactFormFields = ({ title, type, name, value, handleChange }) => {
  return (
    <>
      <Form.Group>
        <Form.Label className="my-3">{title}</Form.Label>
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
};

export default ContactFormFields;
