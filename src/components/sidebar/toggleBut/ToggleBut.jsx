import "./toggleBut.scss";
import React from "react";

const ToggleBut = ({ setOpen }) => {
  return <button onClick={() => setOpen((prev) => !prev)}>AAA </button>;
};

export default ToggleBut;
