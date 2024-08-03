import React from "react";
import Alert from "react-bootstrap/Alert";
import styles from "../styles/AlertMessageNoImageAlert.module.css";

// component to render no image alert
const AlertMessageNoImageAlert = ({ workType }) => {
  return (
    <Alert className={`${styles.Alert} mt-3`} variant="warning">
      No images available for {workType ? workType : "main page."}
    </Alert>
  );
};

export default AlertMessageNoImageAlert;
