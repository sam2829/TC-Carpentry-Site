import React from "react";
import Alert from "react-bootstrap/Alert";
import styles from "../styles/AlertMessageNoImageAlert.module.css";

// component to render no image alert
const AlertMessageNoImageAlert = ({ workType, mainPage, portfolioPage }) => {
  // determine message to be displayed
  const message = workType || mainPage || portfolioPage || "content";

  return (
    <Alert className={`${styles.Alert} mt-3`} variant="warning">
      No images available for {message}
    </Alert>
  );
};

export default AlertMessageNoImageAlert;
