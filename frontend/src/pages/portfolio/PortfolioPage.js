import React, { useState } from "react";
import styles from "../../styles/PortfolioPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PortfolioPageImages from "./PortfolioPageImages";

import ContactForm from "../../components/ContactForm";
import useFetchImages from "../../hooks/useFetchImages";

const PortfolioPage = () => {
  // State for tab key
  const [activeTab, setActiveTab] = useState("Roof");

  // hook to fetch images
  const { images, isLoading, error } = useFetchImages("portfolio");

  // Filter images based on the active tab
  const filteredImages = images.filter(
    (image) => image.work_type === activeTab
  );

  return (
    <div className={styles.main}>
      <Container className="my-5">
        <Row>
          <h2 className="my-5">Our Work</h2>
        </Row>
        {/* tab section */}
        <section className={styles.TabSection}>
          <Tabs
            defaultActiveKey="Roof"
            id="justify-tab-example"
            className={`${styles.MainTab} mb-3`}
            onSelect={(k) => setActiveTab(k)}
            justify
          >
            {/* map over tabs available */}
            {["Roof", "Kitchen", "Doors", "Floors", "Skirtings", "Other"].map(
              (tabType) => (
                <Tab
                  key={tabType}
                  eventKey={tabType}
                  title={tabType.charAt(0).toUpperCase() + tabType.slice(1)}
                >
                  {/* component to render portfolio images */}
                  <PortfolioPageImages
                    filteredImages={filteredImages}
                    isLoading={isLoading}
                    error={error}
                    workType={tabType}
                  />
                </Tab>
              )
            )}
          </Tabs>
        </section>
        <ContactForm />
      </Container>
    </div>
  );
};

export default PortfolioPage;
