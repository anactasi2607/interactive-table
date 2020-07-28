import React, { useState } from "react";
import "./TableSearch.css";

function TableSearch(props) {
  const [value, setValue] = useState("");
  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        onChange={valueChangeHandler}
        value={value}
      />
      <button className="search__button" onClick={() => props.onSearch(value)}>
        Найти
      </button>
    </div>
  );
}

export default TableSearch;
