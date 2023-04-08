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
          <Link to="Shabeeb/" className="route">
            <img src={home} alt="" className="pic"/> Home
          </Link>
          <Link to="Shabeeb/about" className="route">
            <img src={about} alt="" className="pic"/> About
          </Link>
          <Link to="Shabeeb/portfolio" className="route">
            <img src={portfolio} alt="" className="pic"/> Portfolio
          </Link>
          <Link to="Shabeeb/blog" className="route">
            <img src={blog} alt="" className="pic"/>
            Blog
          </Link>
          <Link to="Shabeeb/contact" className="route">
            <img src={contact} alt="" className="pic"/> Contact
          </Link>
        </div>

        <Routes>
          <Route path="Shabeeb/" element={<Home />} />
          <Route path="Shabeeb/about" element={<About />} />
          <Route path="Shabeeb/blog" element={<Blog />} />
          <Route path="Shabeeb/portfolio" element={<Portfolio />} />
          <Route path="Shabeeb/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
