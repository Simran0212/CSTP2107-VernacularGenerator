import { useState } from "react";
import "./searchBar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;