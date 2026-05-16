import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
const basename = import.meta.env.BASE_URL === '/Shabeeb/' ? '/Shabeeb' : '/';
function App() {
  return (
    
    <Router basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fafaf8', color: '#0a0a0a' }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;