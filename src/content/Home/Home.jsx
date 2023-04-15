import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import insta from "./instagram.png";
import git from "./github.png";
import linked from "./linkedin.png";

function Home() {
  let nav = useNavigate();
  function abo() {
    nav("/Shabeeb/about");
  }
  return (
    <div className="home1">
      <h3>Hey there!</h3>
      <h1 className="myname">I'm Shabeeb</h1>
      <button className="knowmore" onClick={abo}>
        Know More
      </button>
      <div className="social2">
        <a href="https://www.linkedin.com/in/shabeebkaruvath/">
          <img src={linked} alt="Linkedin" />
        </a>
        <a href="https://github.com/Shabeebkaruvath">
          <img src={git} alt="github" />
        </a>

        <a href="https://www.instagram.com/shabeeb.edn/">
          <img src={insta} alt="instagram" />
        </a>
      </div>
    </div>
  );
}

export default Home;
