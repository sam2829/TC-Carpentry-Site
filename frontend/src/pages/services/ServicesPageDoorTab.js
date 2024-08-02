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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
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
