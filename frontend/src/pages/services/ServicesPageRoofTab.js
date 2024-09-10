import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../../images/roof-1.jpg";
import image2 from "../../images/roof-2.jpg";
import image3 from "../../images/roof-3.jpg";
import image4 from "../../images/roof-4.jpg";

// component to render the info for roofs tab
const ServicesPageRoofTab = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={8}>
          <h2 className={`${styles.Tab} my-5`}>Roofing</h2>
          <p className="mt-3">
            At Tom Costin Carpentry, we offer comprehensive roofing services
            that cover all aspects of carpentry. Whether you need a new roof
            installation, repairs, or custom roofing solutions, our skilled team
            is equipped to handle projects of any size and complexity. We work
            with a wide range of materials and styles to ensure your roof not
            only looks great but also provides long-lasting protection. Whether
            you have your own materials or need us to source them, we’re
            committed to delivering exceptional craftsmanship and ensuring your
            roof meets the highest standards of quality and durability.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image4} alt="roofing pciture 1" />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image1} alt="roofing pciture 1" />
        </Col>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image2} alt="roofing pciture 1" />
        </Col>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image3} alt="roofing pciture 1" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}></Col>
      </Row>
    </>
  );
};

export default ServicesPageRoofTab;
