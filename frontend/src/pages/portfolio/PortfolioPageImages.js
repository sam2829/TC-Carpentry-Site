import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/PortfolioPage.module.css";

// Component to render images for portfolio
const PortfolioPageImages = ({
  filteredImages = [],
  isLoading,
  error,
  workType
}) => {
  return (
    <Row>
      {/* Check for loading */}
      {isLoading ? (
        <Col xs={12}>
          <div>Loading images...</div>
        </Col>
        // check for errors
      ) : error ? (
        <Col xs={12}>
          <div>{error}</div>
        </Col>
        // check images are available
      ) : filteredImages.length === 0 ? (
        <Col xs={12}>
          <div>No images available for {workType}</div>
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