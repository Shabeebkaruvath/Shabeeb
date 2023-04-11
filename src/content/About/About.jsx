import React from "react";
import {useNavigate} from "react-router-dom"
import "./About.css";
function About() {
    let nav=useNavigate();
    function port(){
      nav('/Shabeeb/portfolio');
    }
  return (
    <div
      style={{
        backgroundImage: ' url("https://wallpapercave.com/wp/wp5942140.jpg")',
        width: "-webkit-fill-available",
        backgroundSize: "cover",
      }}
      className="aboutdiv"
    >
      <h1>About</h1>
      <p>
        Hello! My name is Shabeeb, and I'm an experienced ReactJS developer with
        2 years of hands-on experience in building modern and scalable web
        applications. I'm passionate about creating interactive user interfaces
        and delivering exceptional user experiences through my code.
      
        With a solid understanding of JavaScript, ReactJS, HTML, CSS, and other
        web technologies, I have successfully worked on various projects,
        ranging from small to large-scale applications. I'm skilled in creating
        reusable and modular components, managing state and props, handling API
        integrations, and implementing responsive designs.
      
     
        I take pride in my ability to collaborate with cross-functional teams,
        communicate effectively, and deliver high-quality code within deadlines.
        I'm a self-motivated learner, always staying updated with the latest
        trends and best practices in web development to ensure that I deliver
        cutting-edge solutions. Apart from my technical skills, I'm organized,
        detail-oriented, and have a strong problem-solving mindset. I'm
        passionate about constantly improving my skills and finding innovative
        solutions to overcome challenges.
       
        I'm excited about the opportunity to contribute my expertise to your web
        development projects. Feel free to explore my portfolio and get in touch
        with me to discuss how we can work together to bring your vision to
        life!
      </p>
      <button className="Portabout" onClick={port}>Portflio</button>
    </div>
  );
}

export default About;
