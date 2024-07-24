import React from 'react'
import Alert from "react-bootstrap/Alert";

// component to render error alerts in contact form
const ErrorAlert = ({errors, fieldName}) => {
  return (
    errors && errors[fieldName] && (
      <Alert className="mt-3" variant="warning">
        {errors[fieldName].map((error, idx) => (
          <div key={idx}>{error}</div>
        ))}
      </Alert>
    )
  )
}

export default ErrorAlert