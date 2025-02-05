import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed w-full py-4 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-yellow-400 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-yellow-400 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-yellow-400 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-yellow-400 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-yellow-400 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





