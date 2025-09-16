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
            Hello! My name is Shabeeb, and I'm an experienced ReactJS developer with 2 years of hands-on experience in building modern and scalable web applications. I'm passionate about creating interactive user interfaces and delivering exceptional user experiences through my code.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={profileImage} 
            alt="Shabeeb"
            className="w-64 h-64 object-cover rounded "
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