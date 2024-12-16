import React from "react";
import { useGlobalContext } from "../context/context";
import { useRef } from "react";
import { use } from "react";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = searchInput.current.value;
    if (!searchValue) return;
    console.log(searchValue);
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          ref={searchInput}
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
