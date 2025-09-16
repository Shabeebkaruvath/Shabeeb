// Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen px-4 py-16 bg-white text-black">
      <div className="max-w-2xl mx-auto border border-black p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        <form
          action="https://formspree.io/f/mzzaqrvp" 
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border border-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="border border-black px-6 py-2 rounded-md font-medium hover:bg-black hover:text-white transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
