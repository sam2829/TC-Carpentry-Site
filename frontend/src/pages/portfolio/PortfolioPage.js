import React, { useState, useEffect } from "react";
import styles from "../../styles/PortfolioPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import PortfolioPageImages from "./PortfolioPageImages";

import ContactForm from "../../components/ContactForm";

const PortfolioPage = () => {
  // State for images
  const [images, setImages] = useState([]);
  // State for tab key
  const [activeTab, setActiveTab] = useState("Roof");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect to fetch images
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        // Function to fetch images
        const { data } = await axios.get("http://127.0.0.1:8000/images/");
        // Filter images just for portfolio page
        const filteredImages = data.filter((image) => image.portfolio_page);
        setImages(filteredImages);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching images", error);
        setError("Failed to fetch images");
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

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
