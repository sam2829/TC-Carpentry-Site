import React, { useState } from "react";
import styles from "../../styles/PortfolioPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PortfolioPageImages from "./PortfolioPageImages";

import ContactForm from "../../components/ContactForm";
import useFetchImages from "../../hooks/useFetchImages";
import LoadingSpinner from "../../components/LoadingSpinner";
import FetchImagesErrorAlert from "../../components/FetchImagesErrorAlert";
import AlertMessageNoImageAlert from "../../components/AlertMessageNoImageAlert";

const PortfolioPage = ({ showAlert }) => {
  // State for tab key
  const [activeTab, setActiveTab] = useState("Roof");

  // hook to fetch images
  const { images, isLoading, error } = useFetchImages("portfolio_page");

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
            id="uncontrolled-tab-example"
            className={`${styles.MainTab} mb-3`}
            onSelect={(k) => setActiveTab(k)}
          >
            {/* map over tabs available */}
            {["Roof", "Kitchen", "Doors", "Floors", "Skirtings", "Other"].map(
              (tabType) => (
                <Tab
                  key={tabType}
                  eventKey={tabType}
                  title={tabType.charAt(0).toUpperCase() + tabType.slice(1)}
                >
                  {/* load spinner if loading images */}
                  {isLoading && (
                    <div className={styles.SpinnerContainer}>
                      <LoadingSpinner />
                    </div>
                  )}
                  {/* Alert for if there is no images */}
                  {images.length === 0 && !isLoading && !error && (
                    <AlertMessageNoImageAlert portfolioPage='portfolio page' />
                  )}
                  {/* component to render portfolio images */}
                  {images.length > 0 && !isLoading && (
                    <PortfolioPageImages
                      filteredImages={filteredImages}
                      isLoading={isLoading}
                      error={error}
                      workType={tabType}
                    />
                  )}
                  {/* render error message */}
                  {error && <FetchImagesErrorAlert error={error} />}
                </Tab>
              )
            )}
          </Tabs>
        </section>
        {/* render contact form */}
        <ContactForm showAlert={showAlert} />
      </Container>
    </div>
  );
};

export default PortfolioPage;
