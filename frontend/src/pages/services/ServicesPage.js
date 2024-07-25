import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import image1 from "../../images/mock-photo.jpg";
import image2 from "../../images/mock-photo-2.jpg";
import image3 from "../../images/mock-photo-3.jpg";
import image4 from "../../images/mock-photo-4.jpg";

const ServicesPage = () => {
  return (
    <div className={styles.main}>
      <Container className="my-5">
        <Row className="my-5">
          <Col xs={12}>
            <h3 className="my-3">Services</h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            </p>
          </Col>
          <Col xs={12} lg={4}></Col>
        </Row>
        <section className={styles.TabSection}>
          <Tabs
            defaultActiveKey="roof"
            id="justify-tab-example"
            className={`${styles.MainTab} mb-3`}
            justify
          >
            <Tab className={styles.Tab} eventKey="roof" title="Roof">
              <Row>
                <Col xs={12} lg={8}>
                  <h2 className={`${styles.Tab} my-5`}>Roofs</h2>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus
                  </p>
                </Col>
                <Col xs={12} lg={4}>
                  <img
                    className={styles.Image}
                    src={image4}
                    alt="roofing pciture 1"
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={12} lg={4}>
                  <img
                    className={styles.Image}
                    src={image1}
                    alt="roofing pciture 1"
                  />
                </Col>
                <Col xs={12} lg={4}>
                  <img
                    className={styles.Image}
                    src={image2}
                    alt="roofing pciture 1"
                  />
                </Col>
                <Col xs={12} lg={4}>
                  <img
                    className={styles.Image}
                    src={image3}
                    alt="roofing pciture 1"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={4}></Col>
              </Row>
            </Tab>
            <Tab eventKey="kitchen" title="Kitchen">
              Tab content for Profile
            </Tab>
            <Tab eventKey="doors" title="Doors">
              Tab content for Loooonger Tab
            </Tab>
            <Tab eventKey="floors" title="Floors">
              Tab content for Contact
            </Tab>
            <Tab eventKey="skirtings" title="Skirtings">
              Tab content for Contact
            </Tab>
            <Tab eventKey="windows" title="Windows">
              Tab content for Contact
            </Tab>
          </Tabs>
        </section>
      </Container>
    </div>
  );
};

export default ServicesPage;
