// src/pages/Homepage.js

import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-teal-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Koodingu LMS</h1>
          <nav>
            <a href="#courses" className="text-white hover:underline mx-2">Courses</a>
            <a href="#about" className="text-white hover:underline mx-2">About</a>
            <a href="#contact" className="text-white hover:underline mx-2">Contact</a>
            <a href="#login" className="text-white hover:underline mx-2">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Koodingu LMS</h2>
          <p className="text-xl mb-6">Your gateway to a world of knowledge and learning.</p>
          <a href="#courses" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Explore Courses</a>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Course */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/400" alt="Course Thumbnail" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Introduction to JavaScript</h3>
                <p className="text-gray-700 mb-4">Learn the basics of JavaScript and get started with programming.</p>
                <a href="#" className="text-teal-600 hover:underline">Learn More</a>
              </div>
            </div>
            {/* Repeat for more courses */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">Koodingu LMS is dedicated to providing high-quality educational resources to help you achieve your learning goals. Our platform offers a wide range of courses designed by experts to enhance your skills and knowledge.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Koodingu LMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
