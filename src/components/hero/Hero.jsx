import React from "react";
import "./hero.scss";
function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>MICHAEL TORRES</h2>
          <h1>Front-End Web Developer</h1>
          <div className="buttons">
            <button>Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/src/assets/img/scroll.png" alt="scroll" />
        </div>
      </div>
      <div className="imgContainer">
        <img src="/src/assets/img/hero.png" alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
