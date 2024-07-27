import React, { useState, useEffect } from "react";
import styles from "../../styles/Slideshow.module.css";
import useFetchImages from "../../hooks/useFetchImages";

// Component to render slideshow of images on homepage
const Slideshow = () => {
  // Set state to display image
  const [imageIndex, setImageIndex] = useState(0);

  // hook to fetch images
  const { images, isLoading, error } = useFetchImages();

  // useEffect used so when page loaded it sets interval timer to switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Display slideshow */}
      <div className={styles.slideshow}>
        {/** map through images */}
        {images.map((image, index) => (
          <img
            key={image.id}
            className={`${styles.slideImage} ${
              index === imageIndex ? styles.active : ""
            }`}
            src={image.image}
            alt={image.description}
          />
        ))}
      </div>
    </>
  );
};

export default Slideshow;
