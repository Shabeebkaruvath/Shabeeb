import React from "react";
import "./Portfolio.css";
import netflix from "./netflix-clone.png";
function Portfolio() {
  return (
    <div className="portdiv" style={{}}>
      <h1>Portfolio</h1>
      <div className="portnow">
         
        <div className="port1">
          <a href="https://github.com/Shabeebkaruvath/Netflix-clone">
            <img src={netflix} alt="netflix ui" />
          </a>
          <h2 className="port1h">Netflix-Clone</h2>
          <p className="port1p">Netflix clone by Reactjs and Movie Data from TMDB API</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
