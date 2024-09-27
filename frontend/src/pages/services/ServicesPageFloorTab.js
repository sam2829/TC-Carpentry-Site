import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../../images/new-floor-and-skirting-image.jpg";
import image2 from "../../images/new-floor-and-skirting-image-2.jpg";
import image3 from "../../images/new-floor-and-skirting-image-3.jpg";
import image4 from "../../images/new-floor-and-skirting-image-4.jpg";

// component to render the info for floors tab
const ServicesPageFloorTab = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={8}>
          <h2 className={`${styles.Tab} my-5`}>Flooring</h2>
          <p className="mt-3">
            At Tom Costin Carpentry, we specialize in high-quality flooring
            solutions tailored to your needs. Whether you're looking to install
            elegant hardwood, durable laminate, or stylish engineered flooring,
            our experienced team is here to deliver impeccable results. We
            handle all aspects of flooring installation, from subfloor
            preparation to the final finish, ensuring a seamless and
            professional outcome. If you have your own materials or need us to
            supply them, we are committed to providing exceptional craftsmanship
            and a flawless finish that enhances the beauty and functionality of
            your space.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image1}
            alt="new wooden flooring in dining room."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image4}
            alt="new wooden flooring around fireplace."
          />
        </Col>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image3}
            alt="new wooden flooring in function room."
          />
        </Col>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image2}
            alt="new wooden flooring in dining room."
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}></Col>
      </Row>
    </>
  );
};

export default ServicesPageFloorTab;
