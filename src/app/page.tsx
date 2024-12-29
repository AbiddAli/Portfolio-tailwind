"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import About from "./About/page";
import Services from "./Services/page";
import Contact from "./Contact/page";


export default function Home() {
  return (
    <section>
      {/* Main Section */}
      <div className="p-20 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[url('/image/minimal3.jpg')] bg-cover bg-center h-screen w-full">
        {/* Left Content Area */}
        <div className="col-span-7 place-self-center text-center sm:text-left py-6 px-8 sm:px-20 lg:py-12">
          <h1 className="text-white pt-6 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide">
            <span className="text-blue-950 bg-clip-text">
              Hi, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[ 
                "Abid Ali",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-2xl mb-6 lg:text-xl">
            Welcome to my portfolio — I am excited to share my work with you!
          </p>
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br from-blue-950 to-blue-600 rounded-full mr-4 text-white border border-black font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Know More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-span-5 place-self-center lg:mt-0 flex justify-center">
          <div>
            <Image
              className="mr-[400px] rounded-full shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-2xl"
              src="/image/treeman.png"
              alt="profile picture"
              width={400}
              height={250}
            />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="py-5 bg-blue-900">
        <About/>
      </div>
      <div className="bg-blue-900">
        <Services />
      </div>
      <div className="py-5 bg-blue-900">
        <Contact />
      </div>
    </section>
  );
}
