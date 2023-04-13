import React from "react";
import {useNavigate} from "react-router-dom"
import "./Home.css";

function Home() {
  let nav=useNavigate();
    function abo(){
      nav('/Shabeeb/about');
    }
  return (
    <div
      className="home1"
       
    >
      <h3>Hey there!</h3>
      <h1 className="myname">I'm Shabeeb</h1>
      <button className="knowmore" onClick={abo}>Know More</button>
    </div>
  );
}

export default Home;
