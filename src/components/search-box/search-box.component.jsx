import React from "react";
import "./search-box.style.css";

export const SearchBox = props => {
  return (
    <input
      class="search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.changeHandle}
    />
  );
};
