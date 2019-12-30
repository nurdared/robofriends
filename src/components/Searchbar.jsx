import React from "react";

const SearchBar = ({ searchChange }) => {
  return (
    <section className="center">
      <div className="search-container">
        <input
          type="search"
          onChange={searchChange}
          placeholder="Search Robots"
        />
        <div className="search"></div>
      </div>
    </section>
  );
};

export default SearchBar;
