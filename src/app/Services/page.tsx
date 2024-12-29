import { FaCode, FaDesktop, FaLayerGroup, FaPalette, FaLightbulb } from 'react-icons/fa';
import React from 'react';


export default function Services() {
  return (
    <section className="text-white p-2 bg-[url('/image/minimal3.jpg')] bg-cover bg-center w-full ">
      <div className="text-center md:text-left md:w-1/2 p-10 text-white"></div>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-left mb-8 text-blue-950 font-[] ">_____My Services</h2>
        <h3 className="text-5xl font-semibold text-left mb-12">What Can I Do</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaCode className="text-yellow-200 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Figma and PSD to HTML/CSS Conversion:</h4>
            <p>I convert Figma/PSD designs into high-quality, pixel-perfect HTML/CSS templates, maintaining design integrity and functionality.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaDesktop className="text-yellow-200 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Front-End Development</h4>
            <p>Proficient in HTML, CSS, TypeScript, and Tailwind CSS, I build interactive and dynamic web interfaces that engage users.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaPalette className="text-yellow-200 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Web Design:</h4>
            <p>With a keen eye for design, I craft aesthetically pleasing and user-friendly layouts that enhance the overall user experience.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaLayerGroup className="text-yellow-200 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Cross-Browser Compatibility:</h4>
            <p>I ensure that your website functions seamlessly across all major browsers, providing a consistent experience for all users.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaLightbulb className="text-yellow-200 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Continuous Learning:</h4>
            <p>I stay updated with the latest trends and technologies in web development to provide innovative and cutting-edge solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


