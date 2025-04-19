import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="input-group">
        <span className="label">🔍</span>
        <input type="text" placeholder="Golden Retriever" />
      </div>
      <div className="input-group">
        <span className="label">📍</span>
        <input type="text" placeholder="Enter your location" />
      </div>
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
