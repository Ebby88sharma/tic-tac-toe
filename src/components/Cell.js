import React from "react";

const Cell = ({ value, onClick }) => {
  return (
    <div className={`cell ${value}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
