import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context/context";

const URL = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`;

function Gallery() {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${URL}&query=${searchTerm}`);
      return response.data;
    },
  });
  if (response.isLoading) {
    return <section className="image-container">Loading...</section>;
  }
  if (response.isError) {
    return <section className="image-container">Error</section>;
  }
  const { results } = response.data;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h2>No images found</h2>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((image) => {
        const { id, urls, alt_description } = image;
        return (
          <img
            key={id}
            className="img"
            src={urls.regular}
            alt={alt_description}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
