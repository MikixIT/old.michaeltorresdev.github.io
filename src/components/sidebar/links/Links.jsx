import "./links.scss";
import "../sidebar.scss";
import React from "react";

function Links() {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];

  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}

export default Links;
