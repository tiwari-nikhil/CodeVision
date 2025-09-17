import React from "react";

import menuBurger from "../assets/menu_burger.png";
import { Link } from "react-router-dom";
import map1 from "../assets/map1.png";
import issue1 from "../assets/issue1.png";
import home1 from "../assets/home1.png";
import leaderboard1 from "../assets/leaderboard1.png";


const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={menuBurger} alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">Naagrik</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-gray-200  "
            >
              <img src={home1} alt="Logo" className="h-8 w-8" />
              <span>Home</span>
            </Link>
            <a
              href="#issue"
              className="flex items-center space-x-1 hover:text-gray-200"
            >
              <img src={issue1} alt="Logo" className="h-8 w-8" />
              <span> Issue</span>
            </a>
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
            <button className="text-black px-4 py-2 rounded-full shadow  hover:underline transform hover:scale-105 transition duration-300">Sign in</button>
            <button className="bg-white text-green-600 px-4 py-2 rounded-full shadow hover:bg-gray-200 transform hover:scale-105 transition duration-300">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
