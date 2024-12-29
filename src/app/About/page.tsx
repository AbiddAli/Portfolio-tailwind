"use client"

import Link from 'next/link';

export default function About() {

  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center p-10 min-h-[90vh] bg-[url('/image/minimal3.jpg')] bg-cover bg-center w-full">
        <div className="text-center md:text-left md:w-1/2 p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950">Who Am I...</h2>

        <div>
            <p className="text-lg md:text-xl mt-2 mb-10">
              I am <b className='text-blue-950'>Abid Ali</b> a passionate Front-End Developer and Programmer with a love for creating user-friendly, efficient, and visually appealing websites and applications. I specialize in JavaScript, TypeScript, and Next.js.
            </p>
        
            <p className="text-lg md:text-xl mt-2 mb-10">
              I am always eager to learn new technologies to improve my skills and keep up with industry trends. Whether it's building responsive layouts, improving user experience, I strive to create clean, maintainable code with a strong emphasis on design and functionality.
            </p>
            </div>
          <Link href="Contact" >
          <button
              className="text-lg  px-6 py-3 w-full sm:w-fit bg-gradient-to-br from-blue-950 to-blue-600 rounded-full mr-4 text-white border border-black font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            contact
            </button>
            </Link>
        </div>

      </section>
    </div>
  );
}
