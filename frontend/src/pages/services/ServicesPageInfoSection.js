import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/ServicesPageInfoSection.module.css";

// component to render the info for services page
const ServicesPageInfoSection = () => {
  return (
    <>
      <Row className="my-5">
        <Col xs={12}>
          <h2 className="my-5">Services</h2>
          <p className="my-3">
            At TC Carpentry, we provide comprehensive carpentry services,
            including kitchen fitting, roofing, door installation, flooring,
            skirting boards, custom storage solutions, shelving, stairs, and a
            range of first and second fix carpentry work.
          </p>
          <p className="my-3">
            If you don't see the specific service you're looking for, please get
            in touch with us. You can call us at 07875922802, visit the{" "}
            <Link to="/contact" className={styles.TextLink}>
              contact
            </Link>{" "}
            page, or complete the form below.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default ServicesPageInfoSection;
