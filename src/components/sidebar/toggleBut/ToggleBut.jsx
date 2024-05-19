import "./toggleBut.scss";
import React from "react";

const ToggleBut = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg viewBox="0 0 100 70" width="40" height="40">
        <rect width="100" height="15"></rect>
        <rect y="30" width="100" height="15"></rect>
        <rect y="60" width="100" height="15"></rect>
      </svg>
    </button>
  );
};

export default ToggleBut;
