import { useState, useEffect } from "react";
import axios from "axios";

// custom hook to fetch images
const useFetchImages = (pageType) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch images when page loads and depending what page type
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/images/", {
          params: { [pageType]: true },
        });
        setImages(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching images", error);
        setError("Failed to fetch images");
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [pageType]);

  return { images, isLoading, error };
};

export default useFetchImages;
