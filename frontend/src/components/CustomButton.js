import React from "react";
import Button from "react-bootstrap/Button";
import styles from "../styles/CustomButtons.module.css";
import LoadingSpinner from "./LoadingSpinner";

// component for custom buttons
const CustomButton = ({ title, formButton, isSubmitting, disabled }) => {
  return (
    <>
      <Button
        className={`${styles.Button} ${formButton ? styles.FormButton : ""}`}
        type={formButton ? "submit" : "button"}
        disabled={disabled}
      >
        {title} {isSubmitting && <LoadingSpinner buttonSpinner />}
      </Button>
    </>
  );
};

export default CustomButton;
