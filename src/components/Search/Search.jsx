import React from "react";
import "./Search.css";

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
