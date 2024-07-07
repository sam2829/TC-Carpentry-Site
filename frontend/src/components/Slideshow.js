import React, { useState, useEffect } from "react";
import imageOne from "../images/mock-photo.jpg";
import imageTwo from "../images/mock-photo-2.jpg";
import imageThree from "../images/mock-photo-3.jpg";
import imageFour from "../images/mock-photo-4.jpg";
import styles from "../styles/Slideshow.module.css";

// List of images in slidehsow
const images = [imageOne, imageTwo, imageThree, imageFour];

// Component to render slideshow of images on homepage
const Slideshow = () => {
  // Set state to display image
  const [imageIndex, setImageIndex] = useState(0);

  // useEffect used so when page loaded it sets interval timer to switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Display slideshow */}
      <div className={styles.slideshow}>
        {/** map through images */}
        {images.map((image, index) => (
          <img
            key={index}
            className={`${styles.slideImage} ${
              index === imageIndex ? styles.active : ""
            }`}
            src={image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default Slideshow;
