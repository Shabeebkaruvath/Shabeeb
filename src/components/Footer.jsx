import React from 'react';
import { FaGithub,FaLinkedinIn,FaInstagram   } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  border-t border-black w-full pt-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="border border-black px-4 py-2 text-sm flex space-x-4">
          <a href="https://github.com/Shabeebkaruvath" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20}/>
          </a>
          <a href="https://www.linkedin.com/in/Shabeebkaruvath" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={20} />
          </a>
          <a href="https://www.instagram.com/shabeeb.edn" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="text-gray-600 text-sm">
          <a href="https://www.linkedin.com/in/Shabeebkaruvath">Built by Shabeeb</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
