import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../../images/new-window-image-1.jpg";
import image2 from "../../images/new-window-image-2.jpg";
import image3 from "../../images/new-window-image-3.jpg";
import image4 from "../../images/holiday-let-image.jpg";

// component to render the info for windows tab
const ServicesPageWindowTab = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={8}>
          <h2 className={`${styles.Tab} my-5`}>Windows</h2>
          <p className="mt-3">
            At Tom Costin Carpentry, we provide expert services for all your
            window needs, from installation to repair and customization. Our
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
          <img
            className={styles.Image}
            src={image1}
            alt="new windows fitted either side of front door."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={4}>
          <img className={styles.Image} src={image4} alt="cottage windows." />
        </Col>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image3}
            alt="new windos fitted upstairs and down stairs to house."
          />
        </Col>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image2}
            alt="windows fitted length of house."
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}></Col>
      </Row>
    </>
  );
};

export default ServicesPageWindowTab;
