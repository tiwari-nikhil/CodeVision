

import React, { useState } from "react";


import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import map1 from "../assets/map1.png";
import issue1 from "../assets/issue1.png";
import home1 from "../assets/home1.png";
import leaderboard1 from "../assets/leaderboard1.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav style={{backgroundColor: '#9bc400'}} className=" text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-40 w-40" />
            {/* <span className="text-xl font-bold">Naagrik</span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-gray-200  "
            >
              <img src={home1} alt="Logo" className="h-8 w-8" />
              <span>Home</span>
            </Link>
            <Link
              to="/Issue"
              className="flex items-center space-x-1 hover:text-gray-200"
            >
              <img src={issue1} alt="Logo" className="h-8 w-8" />
              <span> Issue</span>
            </Link>
            <Link
              to="/Map"
              className="flex items-center space-x-1 hover:text-gray-200"
            >
              <img src={map1} alt="Logo" className="h-8 w-8" />
              <span>Map View</span>
            </Link>
            <Link
              to="/leaderboard"
              className="flex items-center space-x-1 hover:text-gray-200"
            >
              <img src={leaderboard1} alt="Logo" className="h-8 w-8" />
              <span>Leaderboard</span>
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-white text-black px-4 py-2 rounded-full shadow  hover:underline transform hover:scale-105 transition duration-300">Sign in</button>
            <button className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200 transform hover:scale-105 transition duration-300">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

       {/* Mobile Menu */}
      {isOpen && (
        <div style={{backgroundColor: '#9bc400'}} className="md:hidden px-4 pb-3 space-y-2 ">
          <Link to="/" className="block hover:text-gray-200">Home</Link>
          <Link to="/Issue" className="block hover:text-gray-200">Issue</Link>
          <Link to="/Map" className="block hover:text-gray-200">Map View</Link>
          <Link to="/Leaderboard" className="block hover:text-gray-200">Leaderboard</Link>
          <button className="block w-full text-left text-black bg-white px-4 py-2 rounded-full mt-2">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
