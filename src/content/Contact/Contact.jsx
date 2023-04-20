import React from "react";
import "./Contact.css";
import insta from "./instagram.png";
import git from "./github.png";
import linked from "./linkedin.png";
function Contact() {
  return (
    <div className="contactdiv" style={{}}>
      <h1>Contact</h1>
      <form action="https://formsubmit.co/shabeebkaruvath@gmail.com" method="POST" className="contactform" >
        <div className="formtop">
          <div className="inname">
            <label htmlFor="">name</label>
            <input type="text" name="name" required/>
          </div>
          <div className="inmail">
            <label htmlFor="">email</label>
            <input type="email" name="mail" required/>
          </div>
        </div>
        <div className="formbottom">
          <label htmlFor="">subject</label>
          <input type="text" name="subject" required/>
          <label htmlFor="" className="textarea">
            message
          </label>
          <textarea name="" id="" cols="30" rows="10" gname="message" required></textarea>
        </div>
        <input type="submit" value="Submit" className="submit" />
      </form >
      <div className="social">
        <h3>Follow me on</h3>
        <div className="social1">
          <a href="https://www.instagram.com/shabeeb.edn/">
            <img src={insta} alt="instagram" />
          </a>
          <a href="https://github.com/Shabeebkaruvath">
            <img src={git} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/shabeebkaruvath/">
            <img src={linked} alt="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
