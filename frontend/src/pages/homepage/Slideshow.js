import React, { useState, useEffect } from "react";
import styles from "../../styles/Slideshow.module.css";
import axios from "axios";

// Component to render slideshow of images on homepage
const Slideshow = () => {
  // Set state to display image
  const [imageIndex, setImageIndex] = useState(0);

  // State for images
  const [images, setImages] = useState([]);

  // useEffect to fetch images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // function to fetch images
        const { data } = await axios.get("http://127.0.0.1:8000/images/");
        // filter images just for main page
        const filteredImages = data.filter((image) => image.main_page);
        setImages(filteredImages);
      } catch (error) {
        console.log("Error fetching images", error);
      }
    };
    fetchImages();
  }, []);

  // useEffect used so when page loaded it sets interval timer to switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 12000);

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
