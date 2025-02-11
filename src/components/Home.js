import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [isHighlighted, setIsHighlighted] = useState(false); // For profile picture effect
  const [title, setTitle] = useState(""); // Holds the current title being typed
  const [isBackspacing, setIsBackspacing] = useState(false); // Tracks backspacing
  const [charIndex, setCharIndex] = useState(0); // Index of character
  const [slideIn, setSlideIn] = useState(false); // Controls slide-in effect

  const homeRef = useRef(null); // Ref for Home section
  const roles = ["Software Engineer | Full Stack Developer | AI/ML Enthusiast"];
  const typingSpeed = 100;
  const backspaceSpeed = 80;
  const pauseBetweenCycles = 1000;

  // Typing Effect
  useEffect(() => {
    const handleTyping = () => {
      if (!isBackspacing && charIndex < roles[0].length) {
        setTimeout(() => {
          setTitle((prev) => prev + roles[0][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else if (!isBackspacing && charIndex === roles[0].length) {
        setTimeout(() => {
          setIsBackspacing(true);
        }, pauseBetweenCycles);
      } else if (isBackspacing && charIndex > 0) {
        setTimeout(() => {
          setTitle((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, backspaceSpeed);
      } else {
        setTimeout(() => {
          setIsBackspacing(false);
          setCharIndex(0);
        }, pauseBetweenCycles);
      }
    };

    handleTyping();
  }, [charIndex, isBackspacing]);

  // Intersection Observer for detecting Home section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSlideIn(true); // Trigger slide-in effect when Home is in view
        } else {
          setSlideIn(false); // Reset when out of view
        }
      },
      { threshold: 0.3 } // Trigger when at least 30% of the section is visible
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);

  return (
    <div
      id="home"
      ref={homeRef}
      className="relative flex items-center justify-between h-screen bg-cover bg-center px-20"
      style={{
        backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20231029/pngtree-deep-indigo-textured-background-image-image_13742219.png)`,
      }}
    >
      {/* Left Side - Text & Buttons */}
      <div className="text-white max-w-lg">
        <h2 className="text-3xl font-medium">
          Hello, I am <br />
          <span className="text-yellow-400">Drutika</span>
        </h2>
        <br />
        {/* Title: Typing Effect */}
        <h3 className="text-2xl mt-2 text-yellow-300">
          {title}
          <span className="text-yellow-300">|</span> {/* Simulate Cursor */}
        </h3>

        {/* About Paragraph */}
        <p className="text-lg text-gray-200 mt-2">
          I am a passionate tech professional, consistently exploring the dynamic landscape of innovation. With a strong emphasis on crafting innovative solutions, I strive to create impactful designs. As a developer, I am deeply committed to continuous growth and advancement. I work to push the boundaries of AI, addressing complex challenges with advanced solutions.
        </p>

        {/* Buttons & Icons */}
        <div className="mt-6 flex items-center space-x-4">
          <span className="text-lg text-gray-300">Check out:</span>
          <a
            href="https://github.com/Drutika06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/drutika-pidikiti-0a5913258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-400 hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Resume Button */}
        <a
<<<<<<< HEAD
          href="https://drive.google.com/file/d/13mYcF01we573Ik0syHCgVZOVqDW8h3hl/view"
=======
          href="https://drive.google.com/file/d/16lA09ndmNhBZmd3WN81NgIhcJUnRjzhI/view?usp=sharinggit"
>>>>>>> acdd66f (first commit)
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Resume
        </a>
      </div>

      {/* Right Side - Profile Picture with Slide-in Effect */}
      <div
        className={`cursor-pointer transition-all duration-700 ${
          isHighlighted ? "w-96 h-96 border-white-400" : "w-80 h-80 border-gray-300"
        } rounded-full border-4 transform ${
          slideIn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        onClick={() => setIsHighlighted(!isHighlighted)}
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGaicnYbnBTEQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711945545998?e=1743638400&v=beta&t=1z6oCgs7qB8172cEyo2nWU-B45vM4R1tamxIaziBz7M"
          alt="Profile"
          className="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;
