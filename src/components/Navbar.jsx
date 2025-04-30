import React  from 'react';
import { Contact, User, Code2,SquareCode, HomeIcon } from 'lucide-react';


const Navbar = () => {
  return (
    <>
      {/* Top Navbar - Desktop */}
      <header className="hidden md:flex w-full max-w-6xl mx-auto px-4 py-6 justify-between items-center">
        <div className="flex items-center space-x-3">
          
          <SquareCode />
          <h1 className="text-xl font-bold"><a href="/">Shabeeb</a></h1>
        </div>
        <nav className="space-x-6 text-lg font-medium">
        <a href="/" className="hover:underline">Home</a>
          <a href="about" className="hover:underline">About</a>
          <a href="projects" className="hover:underline">Projects</a>
          <a href="contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Bottom Mobile Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-black md:hidden">
        <div className="flex justify-around py-3">
        <a href="/" className="flex flex-col items-center text-sm">
            <HomeIcon className="w-5 h-5 mb-1" />
            Home
          </a>
          <a href="about" className="flex flex-col items-center text-sm">
            <User className="w-5 h-5 mb-1" />
            About
          </a>
          <a href="projects" className="flex flex-col items-center text-sm">
            <Code2 className="w-5 h-5 mb-1" />
            Projects
          </a>
          <a href="contact" className="flex flex-col items-center text-sm">
            
            <Contact className="w-5 h-5 mb-1"  />
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
