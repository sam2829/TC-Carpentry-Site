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
            <h3 className="my-3">Welcome to TC Carpentry</h3>
            <p className="my-3">
              Based in Abergavenny, Monmouthshire, UK, TC Carpentry brings over
              18 years of expertise to all aspects of carpentry. Our skilled
              team is dedicated to delivering top-quality craftsmanship for
              projects of any size.
            </p>
            <p className="my-3">
              We offer a full range of carpentry services, including kitchen
              fitting, roofing, door installation, flooring, skirting boards,
              custom storage solutions, shelving, stairs, and other first and
              second fix carpentry work.
            </p>
            <p className="my-3">
              Our goal is to provide you with a professional service that
              understands your vision and meets the highest standards of
              quality. You can explore our recent projects in our{" "}
              <Link to="/portfolio" className={styles.TextLink}>
                portfolio
              </Link>
              .
            </p>
            <p className="my-3">
              For more details about our services and how we can assist with
              your project, please visit our{" "}
              <Link to="/services" className={styles.TextLink}>
                services
              </Link>{" "}
              page.
            </p>
            {/** Link to contact page */}
            <Link to="/contact">
              {/**Custom button component */}
              <CustomButton title="Contact Us" />
            </Link>
          </Col>
          <Col
            xs={12}
            lg={4}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              className={` my-3 ${styles.Image}`}
              src={imageOne}
              alt="work"
            />
          </Col>
        </Row>
        <Row className="my-5">
          {/** this column is only on display for large screens */}
          <Col
            lg={4}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="d-none d-lg-block w-100">
              <img
                className={` my-3 ${styles.Image}`}
                src={imageTwo}
                alt="work 2"
              />
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <h3 className="my-3">Why Choose Us?</h3>
            <p className="my-3">
              At TC Carpentry, we are deeply committed to delivering exceptional
              craftsmanship and ensuring the highest levels of customer
              satisfaction. Our primary goal is to meet and exceed your
              expectations with every project.
            </p>
            <p className="my-3">
              Our team of carpenters is highly experienced and holds City and
              Guilds Level 3 qualifications, reflecting our commitment to the
              highest standards of workmanship.
            </p>
            <p className="my-3">
              As a small, dedicated company, we offer a personalized service
              that enhances customer satisfaction and demonstrates our strong
              commitment to quality.
            </p>
            <p className="my-3">
              We provide free, no-obligation quotations, ensuring you have all
              the information you need to make an informed decision. We are
              confident that you will find our prices both competitive and fair,
              matched by the high standards of work we deliver.
            </p>
            <p className="my-3">
              We also prioritize cleanliness and will leave your space as clean
              and tidy as we found it upon completion of the job.
            </p>
            <p className="my-3">
              To arrange a free quote or if you have any questions about our
              carpentry services, please call us at 07875922802, visit our{" "}
              <Link to="/contact" className={styles.TextLink}>
                contact
              </Link>{" "}
              page, or fill out the form below.
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
