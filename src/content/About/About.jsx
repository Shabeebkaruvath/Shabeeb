import React from 'react'
import { useNavigate,Link } from "react-router-dom";
function About() {
  var Navi = useNavigate();
  return (
     
    <div>
      About
    <button onClick={()=>{Navi('/')}}>home</button>
    <Link to="Shabeeb/blog">blog</Link>
    </div>    
  )
}

export default About