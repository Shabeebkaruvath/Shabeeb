import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./content/About/About";
import about from "./about.png";
import blog from "./blog.png";
import home from "./home.png";
import contact from "./contact.png";
import portfolio from "./portfolio.png";
import Blog from "./content/Blog/Blog";
import Contact from "./content/Contact/Contact";
import Portfolio from "./content/Portfolio/Portfolio";
import Home from "./content/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="routediv">
          <Link to="/" className="route">
            <img src={home} alt="" /> Home
          </Link>
          <Link to="/about" className="route">
            <img src={about} alt="" /> About
          </Link>
          <Link to="/portfolio" className="route">
            <img src={portfolio} alt="" /> Portfolio
          </Link>
          <Link to="/blog" className="route">
            <img src={blog} alt="" />
            Blog
          </Link>
          <Link to="/contact" className="route">
            <img src={contact} alt="" /> Contact
          </Link>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
