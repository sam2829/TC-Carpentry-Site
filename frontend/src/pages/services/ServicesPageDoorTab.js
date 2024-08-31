import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../../images/door-1.jpg";
import image2 from "../../images/door-2.jpg";
import image3 from "../../images/door-3.jpg";
import image4 from "../../images/door-4.jpg";

// component to render the info for doors tab
const ServicesPageDoorTab = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={8}>
          <h2 className={`${styles.Tab} my-5`}>Doors</h2>
          <p className="mt-3">
            At TC Carpentry, we specialize in fitting all types of doors,
            regardless of make or size. Whether it's an interior or exterior
            door, cupboard or wardrobe doors, we have the expertise to handle it
            all. We're happy to work with doors you provide or source them
            ourselves to meet your exact specifications. Our team is committed
            to delivering precise and professional installation, ensuring every
            door fits perfectly and functions flawlessly. Whatever your door
            needs, TC Carpentry is here to provide a tailored solution.
          </p>
        </Col>
        {/* Display images */}
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image2} alt="roofing pciture 1" />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image3} alt="roofing pciture 1" />
        </Col>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image4} alt="roofing pciture 1" />
        </Col>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image1} alt="roofing pciture 1" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}></Col>
      </Row>
    </>
  );
};

export default ServicesPageDoorTab;
