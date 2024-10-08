import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../../images/new-floor-and-skirting-image.jpg";
import image2 from "../../images/new-floor-and-skirting-image-2.jpg";
import image3 from "../../images/new-floor-and-skirting-image-3.jpg";
import image4 from "../../images/new-floor-and-skirting-image-4.jpg";

// component to render the info for skirtings tab
const ServicesPageSkirtingTab = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={8}>
          <h2 className={`${styles.Tab} my-5`}>Skirtings</h2>
          <p className="mt-3">
            At Tom Costin Carpentry, we offer expert installation and
            customization of skirting boards to add a refined touch to any room.
            Our skilled team can handle a variety of styles and materials, from
            traditional designs to modern profiles, ensuring a perfect match
            with your interior decor. We meticulously measure, cut, and install
            skirting boards to achieve a seamless and polished finish. Whether
            you supply the materials or prefer us to source them, we are
            dedicated to delivering superior craftsmanship and attention to
            detail, enhancing both the aesthetic and functional aspects of your
            space.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image4}
            alt="new skirting fitted around fireplace."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image3}
            alt="new skirting fitted in function room."
          />
        </Col>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image1}
            alt="new skirting fitted in dining room."
          />
        </Col>
        <Col xs={12} lg={4}>
          <img
            className={styles.Image}
            src={image2}
            alt="new skirting fitted in dining room."
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}></Col>
      </Row>
    </>
  );
};

export default ServicesPageSkirtingTab;
