import React from "react";
import "./Home.css";
function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: ' url("https://wallpapercave.com/wp/wp5942140.jpg")',
        backgroundSize: "cover",
        width: "-webkit-fill-available",
      }}
    >
      <h3>Hey there!</h3>
      <h1 className="myname">I'm Shabeeb</h1>
    </div>
  );
}

export default Home;
