import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styles from "../styles/NotFoundPage.module.css";
import NoResults from "../images/no-results.png";

// component to render the not found page
const NotFoundPage = () => {
  return (
    <Container className={`${styles.Main}`}>
      <div>
        <img
          className={`${styles.Image} my-5`}
          src={NoResults}
          alt="No results icon"
        />
      </div>
      <div className={`${styles.Text} text-center my-5`}>
        <p>The page your looking for doesn't exist.</p>
        <Link className={styles.Link} to="/">
          <span>Click to return to Home page</span>
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
