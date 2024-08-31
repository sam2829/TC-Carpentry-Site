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
              TC Carpentry is a skilled carpentry company based in Abergavenny,
              Monmouthshire, UK. Here at TC Carpentry we have over 18 years of
              experience in all aspects of carpentry.
            </p>
            <p className="my-3">
              We provide carpentry services to all, with no job to big or to
              small.
            </p>
            <p className="my-3">
              We cover all aspects of Carpentry work including Kitchen fitting,
              Roofing, Doors, Flooring, Skirting boards, Custom Storage,
              Shelving, stairs and many other first and second fix work of
              carpentry.
            </p>
            <p className="my-3">
              We hope you find us a very professional company that can help
              understand your plans and provide the high standards of work you
              need. You can view all recent work in our{" "}
              <Link to="/portfolio" className={styles.TextLink}>
                portfolio
              </Link>
              .
            </p>
            <p className="my-3">
              You can also visit our{" "}
              <Link to="/services" className={styles.TextLink}>
                services
              </Link>{" "}
              page to find out more about what we do and how we can help you get
              exactly what you have been looking for.
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
              Here at TC Carpentry we extremely dedicated and take great pride
              in what we do, with our main goal to deliver customer satisfaction
              to the highest of standards.
            </p>
            <p className="my-3">
              Our carpenters a highly experienced and are qualified to the
              highest standards with City and Guilds Level 3.
            </p>
            <p className="my-3">
              We are a small company but we believe this gives a more personal
              service for the customer, which helps deliver higher customer
              satisfactions and overall a stronger commitment to higher
              standards.
            </p>
            <p className="my-3">
              All quoations are free with no obligation, so whatever carpentry
              work you are looking for, please be sure to speak to us first. We
              are confident that you will find our prices competitive and fair,
              along with the high standards we provide.
            </p>
            <p className="my-3">
              We will also make sure that when we finish any job, you find the
              areas we've been working in as clean and tidy as when we came to
              the job.
            </p>
            <p className="my-3">
              If you would like to arrange a free quote today or if you have any
              queries regarding any carpentry work, you can call us on
              07875922802, go to the{" "}
              <Link to="/contact" className={styles.TextLink}>
                contact
              </Link>{" "}
              page or fill out the form below.
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
