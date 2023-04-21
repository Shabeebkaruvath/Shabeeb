import React from "react";
import "./Portfolio.css";
import netflix from "./netflix-clone.png";
import pepper from "./E-commerce.png";
import weather from "./weather.png";
import weathereact from "./React-weather.png";
function Portfolio() {
  return (
    <div className="portdiv" style={{}}>
      <h1>Portfolio</h1>
      <div className="portnow">
        <div className="port1">
          <a href="https://shabeebkaruvath.github.io/Netflix-clone/">
            <img src={netflix} alt="netflix ui" />
          </a>
          <h2 className="port1h">Netflix-Clone</h2>
          <p className="port1p">
            Netflix clone by Reactjs and Movie Data from TMDB API
          </p>
        </div>

        <div className="port1">
          <a href="https://shabeebkaruvath.github.io/Reactjs-Weather-app-/">
            <img src={weathereact} alt="Weather" />
          </a>
          <h2 className="port1h">Reactjs Weather app</h2>
          <p className="port1p">
           Weather app made by Reactjs and Weather Data from openweathermap API
          </p>
        </div>

        <div className="port2">
          <a href="https://shabeebkaruvath.github.io/E-Commerce-Wesite/">
            <img src={pepper} alt="e-commerce" />
          </a>
          <h2 className="port2h">E-Commerce-Wesite</h2>
          <p className="port2p">E-Commerce-Wesite made by Reactjs </p>
        </div>
        <div className="port3">
          <a href="https://github.com/Shabeebkaruvath/Django-Weather-app">
            <img src={weather} alt="e-commerce" />
          </a>
          <h2 className="port3h">Weather app</h2>
          <p className="port3p">
            Weather app using openweathermap api made by Python Django
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
