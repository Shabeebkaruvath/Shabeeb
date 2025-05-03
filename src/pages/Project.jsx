import React from 'react';
import { FaGithub } from 'react-icons/fa'; 

const projects = [
  {
    title: 'Product Aggregator Website',
    image: 'https://github.com/user-attachments/assets/b5f83cd2-1666-4ba9-aa95-d54f165cd7c0',
    github: 'https://github.com/Shabeebkaruvath/fproject',
    description: 'A comprehensive platform that aggregates products from multiple sources, allowing users to compare prices and features before making purchase decisions.'
  },
  {
    title: 'Finance Tracker App',
    image: 'https://github.com/user-attachments/assets/d9dd56a9-bfbc-4904-ad35-fe90a49bede8',
    github: 'https://github.com/Shabeebkaruvath/CashFlow',
    description: 'A personal finance management application that helps users track expenses, manage budgets, and visualize spending patterns with interactive charts.'
  },
  
  {
    title: 'Weather App',
    image: '/images/weather-app.png',
    github: 'https://github.com/Shabeebkaruvath/Reactjs-Weather-app-',
    description: 'A responsive weather application that provides real-time forecasts, hourly updates, and extended predictions using data from reliable meteorological APIs.'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16 my-10">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-xl hover:shadow-md transition"
          >
            <a href={project.image}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 border border-gray-300 rounded-lg"
              />
            </a>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium underline text-blue-600"
            >
              {/* Using a text placeholder instead of FaGithub component */}
              <FaGithub></FaGithub>
              View in GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
