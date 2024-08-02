import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/PortfolioPage.module.css";

// Component to render images for portfolio
const PortfolioPageImages = ({ filteredImages = [], workType }) => {
  return (
    <Row>
      {/* check images are available */}
      {filteredImages.length === 0 ? (
        <Col xs={12}>
          <Alert className={`${styles.Alert} mt-3`} variant="warning">
            No images available for {workType}
          </Alert>
        </Col>
      ) : (
        // Map over images
        filteredImages.map((image) => (
          <Col key={image.id} xs={12} lg={4}>
            <img
              className={styles.Image}
              src={image.image}
              alt={image.description}
            />
          </Col>
        ))
      )}
    </Row>
  );
};

export default PortfolioPageImages;
