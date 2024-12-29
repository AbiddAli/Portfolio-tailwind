"use client";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <section className=" flex flex-col md:flex-row items-center bg-[url('/image/minimal3.jpg')] bg-cover bg-center h-auto min-h-screen w-full px-4 md:px-8">
        {/* Left Section */}
        <div className="pt-5 text-center md:text-left md:w-1/2 p-6 text-white flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>

          <p className="text-lg md:text-xl mt-2 mb-10">
            We would love to hear from you! Whether you have a question, a
            project proposal, or just want to connect, feel free to reach out.
          </p>

          <form onSubmit={handleSubmit} className="text-black">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-96 p-3 rounded-lg mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-96 p-3 rounded-lg mb-4"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg mb-4"
              rows={5}
              required
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br from-blue-950 to-blue-600 rounded-full text-white border border-black font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-950">
              Get In Touch
            </h2>
            <div className="flex justify-center md:justify-start space-x-8 md:space-x-10">
              <a
                href="https://github.com/AbiddAli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition"
              >
                <FaGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition"
              >
                <FaLinkedinIn size={40} />
              </a>
              <a
                href="mailto:example@example.com"
                className="text-white hover:text-blue-300 transition"
              >
                <AiOutlineMail size={40} />
              </a>
            </div>
          </div>
        </div>

        
      </section>
    </div>
  );
}

