import React, {useRef, useEffect} from "react";
import "./SearchBar.css"
const SearchBar = () => {

  const inputRef = useRef(null);


  //Remove Placeholder attribute on focus
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.removeAttribute("placeholder");
      inputRef.current.setSelectionRange(0, 0);
    }
  };

  //Add placeholder attribute after un focused
  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.setAttribute("placeholder", "Search all events...");
    }
  };

  
  return (
      <div className="search-container"> 
       <div className="search-icon">
      <i class="fa-solid fa-magnifying-glass" style={{color: "#ffffff"}}></i>
       </div>
        <input
          type="text"
          placeholder="Search all events..."
          className="search"
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></input>
        
        <div className="slider-icon">
        <i class="fa-solid fa-sliders" style={{color: "#ffffff"}}></i>
        </div>
        
    </div>
  );
};

export default SearchBar;
