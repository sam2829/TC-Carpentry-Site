import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../../images/kitchen-1.jpg";
import image2 from "../../images/kitchen-2.jpg";
import image3 from "../../images/kitchen-3.jpg";
import image4 from "../../images/kitchen-4.jpg";

// component to render the info for kitchens tab
const ServicesPageKitchenTab = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={8}>
          <h2 className={`${styles.Tab} my-5`}>Kitchens</h2>
          <p className="mt-3">
            At Tom Costin Carpentry, we provide expert carpentry services for
            all your kitchen needs. From designing and installing custom
            cabinetry to crafting unique kitchen features, our skilled team
            ensures your kitchen is both functional and stylish. We work with a
            variety of materials and finishes to create a space that perfectly
            suits your taste and lifestyle. Whether you’re renovating your
            existing kitchen or starting from scratch, we offer tailored
            solutions and meticulous craftsmanship. If you have your own
            materials or need us to provide them, we’re dedicated to delivering
            exceptional results that enhance your kitchen's beauty and
            functionality.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image1} alt="roofing pciture 1" />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image4} alt="roofing pciture 1" />
        </Col>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image3} alt="roofing pciture 1" />
        </Col>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image2} alt="roofing pciture 1" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}></Col>
      </Row>
    </>
  );
};

export default ServicesPageKitchenTab;
