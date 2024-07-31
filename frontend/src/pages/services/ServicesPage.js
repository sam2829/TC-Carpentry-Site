import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Container from "react-bootstrap/Container";

import ServicesPageInfoSection from "./ServicesPageInfoSection";
import ServicesPageTabs from "./ServicesPageTabs";
import ContactForm from "../../components/ContactForm";

// component to render the services page
const ServicesPage = ({ showAlert }) => {
  return (
    <div className={styles.main}>
      <Container className="my-5">
        {/* Services page info section */}
        <ServicesPageInfoSection />
        {/* Section for the Tabs */}
        <section className={styles.TabSection}>
          <ServicesPageTabs />
        </section>
        {/* Contact form */}
        <ContactForm showAlert={showAlert} />
      </Container>
    </div>
  );
};

export default ServicesPage;
