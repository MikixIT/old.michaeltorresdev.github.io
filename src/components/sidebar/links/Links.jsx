import "./links.scss";
import "../sidebar.scss";
import React from "react";

function Links() {
  const sections = ["Homepage", "Services", "Portfolio", "Contact"];

  return (
    <div className="links">
      {sections.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}

export default Links;
