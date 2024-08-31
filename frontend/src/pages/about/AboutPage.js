import React from "react";
import styles from "../../styles/AboutPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ContactForm from "../../components/ContactForm";

// component to render the about page
const AboutPage = ({ showAlert }) => {
  return (
    <div className={styles.main}>
      <Container className="my-5">
        {/* about us information */}
        <Row>
          <h2 className="my-5">About TC Carpentry</h2>
          <p>
            TC Carpentry is a premier carpentry company based in Abergavenny,
            Monmouthshire, UK, with over 18 years of experience in the industry.
            We pride ourselves on delivering top-quality craftsmanship across a
            broad spectrum of carpentry services, from kitchen fitting and
            roofing to bespoke shelving and custom storage solutions. Our
            dedicated team combines extensive expertise with a passion for
            precision, ensuring every project is completed to the highest
            standards.
          </p>
          <p className="my-3">
            As a small, client-focused company, we offer a personalized approach
            that sets us apart. We believe in building strong relationships with
            our clients, understanding their unique needs, and providing
            tailored solutions that exceed expectations. Our commitment to
            excellence is reflected in our attention to detail, high-quality
            materials, and meticulous workmanship.
          </p>
          <p className="my-3">
            At TC Carpentry, we are not just about completing a job; we are
            about crafting lasting results and ensuring your satisfaction.
            Whether you're embarking on a renovation project or need specialized
            carpentry services, we are here to bring your vision to life with
            professionalism and skill.
          </p>
        </Row>
        {/* contact form */}
        <ContactForm showAlert={showAlert} />
      </Container>
    </div>
  );
};

export default AboutPage;
