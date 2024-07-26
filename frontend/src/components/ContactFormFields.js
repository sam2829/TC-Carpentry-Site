import React from "react";
import Form from "react-bootstrap/Form";
import ErrorAlert from "./ErrorAlert";

// component to render input field for home page contact form
const ContactFormFields = ({
  title,
  type = "text",
  name,
  value,
  handleChange,
  errors,
  as = "input", // Default to 'input' if not provided
  rows, // Only applies if 'as' is 'textarea'
}) => {
  return (
    <>
      <Form.Group>
        <Form.Label className="my-3">{title}</Form.Label>
        <Form.Control
          as={as} // Render the specified HTML element or component
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required
          rows={rows} // Only applies if 'as' is 'textarea'
        />
        {/** Error alert message component */}
        <ErrorAlert errors={errors} fieldName={name} />
      </Form.Group>
    </>
  );
};

export default ContactFormFields;
