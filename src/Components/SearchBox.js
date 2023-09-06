import React from "react";

function SearchBox({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b-green bg-lightest-blue"
        type="search"
        placeholder="search for a robot"
        onChange={searchChange}
      ></input>
    </div>
  );
}

export default SearchBox;
