import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import imageOne from "../../images/mock-photo.jpg";
import imageTwo from "../../images/mock-photo-2.jpg";

import styles from "../../styles/HomeInfoSection.module.css";
import CustomButton from "../../components/CustomButton";

// Component to render info section on homepage
const HomeInfoSection = () => {
  return (
    <div>
      <Container className="my-5">
        <Row className="my-5">
          <Col xs={12} lg={8}>
            <h3 className="my-3">TC Carpentry</h3>
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
            {/** Link to contact page */}
            <Link to="/contact">
              {/**Custom button component */}
              <CustomButton title="Contact Us" />
            </Link>
          </Col>
          <Col xs={12} lg={4}>
            <img
              className={` my-3 ${styles.Image}`}
              src={imageOne}
              alt="work"
            />
          </Col>
        </Row>
        <Row className="my-5">
          {/** this column is only on display for large screens */}
          <Col lg={4} className="d-none d-lg-block">
            <img
              className={` my-3 ${styles.Image}`}
              src={imageTwo}
              alt="work 2"
            />
          </Col>
          <Col xs={12} lg={8}>
            <h3 className="my-3">Why Choose Us?</h3>
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
            {/** Link to contact page */}
            <Link to="/contact">
              {/**Custom button component */}
              <CustomButton title="Contact Us" />
            </Link>
          </Col>
          {/** This column and image is only on displayed in small screens */}
          <Col xs={12} className="d-block d-lg-none">
            <img
              className={` my-3 ${styles.Image}`}
              src={imageTwo}
              alt="work 2"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeInfoSection;
