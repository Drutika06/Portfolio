import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // No need for Route and Routes imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Home Section */}
        <div id="home">
          <Home />
        </div>

        {/* About Section */}
        <div id="about">
          <About />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <Skills />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <Projects />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;






