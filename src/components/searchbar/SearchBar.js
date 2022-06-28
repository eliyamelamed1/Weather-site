import React from "react";
import "./_search-bar.scss";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  
  return (
    <div className="search_bar">
      <SearchIcon className="search_icon" htmlColor="grey" />
      <input className="input" placeholder="Search"></input>
    </div>
  );
}

export default SearchBar;
