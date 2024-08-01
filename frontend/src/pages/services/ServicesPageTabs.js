import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tabData from "./ServicesPageTabData";
import styles from "../../styles/ServicesPage.module.css";

// component to map over the tabs for services
const ServicesPageTabs = () => {
  return (
    <Tabs
      defaultActiveKey="roof"
      id="uncontrolled-tab-example"
      className={`${styles.MainTab} mb-3`}
    >
      {/* map over the tabData to create tabs */}
      {tabData.map(({ eventKey, title, component }) => (
        <Tab
          key={eventKey}
          eventKey={eventKey}
          title={title}
          className={styles.Tab}
        >
          {component}
        </Tab>
      ))}
    </Tabs>
  );
};

export default ServicesPageTabs;
