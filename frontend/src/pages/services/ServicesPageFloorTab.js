import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../../images/floor-1.jpeg";
import image2 from "../../images/floor-2.avif";
import image3 from "../../images/floor-3.jpg";
import image4 from "../../images/floor-4.jpg";

// component to render the info for floors tab
const ServicesPageFloorTab = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={8}>
          <h2 className={`${styles.Tab} my-5`}>Floors</h2>
          <p className="mt-3">
            At TC Carpentry, we specialize in high-quality flooring solutions
            tailored to your needs. Whether you're looking to install elegant
            hardwood, durable laminate, or stylish engineered flooring, our
            experienced team is here to deliver impeccable results. We handle
            all aspects of flooring installation, from subfloor preparation to
            the final finish, ensuring a seamless and professional outcome. If
            you have your own materials or need us to supply them, we are
            committed to providing exceptional craftsmanship and a flawless
            finish that enhances the beauty and functionality of your space.
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

export default ServicesPageFloorTab;
