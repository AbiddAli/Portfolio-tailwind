import React from "react";
import Link from "next/link";



export default function Header(){
    return(
         
      <header className="h-14 flex justify-between items-center px-20 font-mono font-semibold text-white bg-blue-800">
      <h1 className="text-4xl">AA</h1>
    <nav className="hidden md:flex space-x-8 text-xl">
    <Link href="/" className="hover:text-black">Home</Link>
    <Link href="About" className="hover:text-black">About</Link>
    <Link href="Services" className="hover:text-black">Services</Link>
    <Link href="Contact" className="px-6 py-2 bg-gradient-to-br from-blue-950 to-blue-600 border border-black rounded-full mr-4 text-white font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 ">Contact</Link>
  </nav>
</header>

    )
}