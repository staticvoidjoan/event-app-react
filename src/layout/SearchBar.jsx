import React from "react";
import "./SearchBar.css"
const SearchBar = () => {
  return (
      <div className="search-container"> 
       <div className="search-icon">
      <i class="fa-solid fa-magnifying-glass" style={{color: "#ffffff"}}></i>
       </div>
        <input
          type="text"
          placeholder="Search all events..."
          className="search"
        ></input>
        
        <div className="slider-icon">
        <i class="fa-solid fa-sliders" style={{color: "#ffffff"}}></i>
        </div>
        
    </div>
  );
};

export default SearchBar;
