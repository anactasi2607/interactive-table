import React from "react";
import "./DataSelector.css";

function DataSelector(props) {
  const smallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  const bigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  return (
    <div className="dataSelector">
      <button
        onClick={() => props.onSelect(smallData)}
        className="dataSelector__button dataSelector__button--small"
      >
        32 элемента
      </button>
      <button
        onClick={() => props.onSelect(bigData)}
        className="dataSelector__button dataSelector__button--big"
      >
        1000 элементов
      </button>
    </div>
  );
}

export default DataSelector;
