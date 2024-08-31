import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../../images/windows-1.jpg";
import image2 from "../../images/windows-2.jpg";
import image3 from "../../images/windows-3.jpg";
import image4 from "../../images/windows-4.jpg";

// component to render the info for windows tab
const ServicesPageWindowTab = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={8}>
          <h2 className={`${styles.Tab} my-5`}>Windows</h2>
          <p className="mt-3">
            At TC Carpentry, we provide expert services for all your window
            needs, from installation to repair and customization. Our
            experienced team handles a wide range of window types and styles,
            including traditional sash, contemporary casement, and bespoke
            designs, ensuring a perfect fit and finish for your home. Whether
            you need new windows installed, existing ones repaired, or custom
            solutions crafted, we are committed to delivering high-quality
            workmanship and exceptional attention to detail. If you have your
            own windows or require us to source them, our goal is to enhance
            your space with both functional and aesthetic excellence.
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

export default ServicesPageWindowTab;
