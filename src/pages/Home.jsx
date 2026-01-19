import React from 'react';
// Import the image directly
import profileImage from '../assets/image1.png';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white text-black font-sans px-6 py-10 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
        <div>
          <h2 className="text-5xl font-black mb-6 leading-tight">
            Hey there.<br />I'm <span className="text-black">Shabeeb</span>.
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
           "I’m Shabeeb—a BCA graduate and current M.Sc. student specializing in Machine Learning. By night, I'm a ReactJS developer with 2 years of experience building clean, high-performance web applications. Currently, I'm bridging the gap between front-end development and Neural Networks </p>
        </div>
        <div className="flex justify-center">
          <img
            src={profileImage} 
            alt="Shabeeb"
            className="w-72 h-72 object-cover rounded-2xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all "
            onError={(e) => {
              console.error("Image failed to load");
              // Fall back to a colored div if image fails
              e.target.style.display = 'none';
              const fallbackDiv = document.createElement('div');
              fallbackDiv.className = 'w-64 h-64 bg-gray-300 rounded border-4 border-black flex items-center justify-center text-xl font-bold';
              fallbackDiv.innerText = 'SH';
              e.target.parentNode.appendChild(fallbackDiv);
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;