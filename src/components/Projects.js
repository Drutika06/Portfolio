import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Credit Card Fraud Detection",
    image: "https://www.linkedin.com/dms/prv/vid/v2/D5606AQHT4bw-5Wv1Aw/messaging-attachmentFile/messaging-attachmentFile/0/1738638107619?m=AQIaiGz2xuBz7gAAAZTO6FAvQaVEboLeb7PrSN9aSVe26ICcJ2YSN1EHwwQ&ne=1&v=beta&t=7gDfKjCVknmOfx2JuBiYobktw6Da7BbtNEG29K6_u7Q",
    description:
      "The project focuses on building an efficient credit card fraud detection system using the Machine Learning, Random Forest Algorithm. Trained on historical transaction data, the model identifies suspicious patterns, helping minimize fraudulent transactions.",
  },
  {
    id: 2,
    title: "Music Verse",
    image: "https://www.linkedin.com/dms/prv/vid/v2/D5606AQGW-z0CHH_FlQ/messaging-attachmentFile/messaging-attachmentFile/0/1738638111815?m=AQKSFITxL05HpgAAAZTO6FA3yA-ZWsmOWmgeJRl7SXeKJmILmTVaVlmhC84&ne=1&v=beta&t=RLyWPMDaqYed__vYvSO5LGhsvniw4bn92R-rP-Ld5fc",
    description:
      "Music Verse is a music website built with  React, Node.js, TailwindCSS and API Integration, offering features like music streaming, playlist creation, music tutorials, fun games, and information on concerts and events, providing an interactive and engaging music experience.",
  },
  {
    id: 3,
    title: "Expense Tracker",
    image: "https://www.linkedin.com/dms/prv/vid/v2/D5606AQH7hatDb68ZQw/messaging-attachmentFile/messaging-attachmentFile/0/1738638113961?m=AQJDLeJfQmMB_QAAAZTO6FA0x41AkrAgIea_uNG4BNzPODf1GfbOYomdduQ&ne=1&v=beta&t=QLl_jsK4Pm5UqyBBFDo-ySMFthDGyCOidrh0tRcglEQ",
    description:
      "Built with React including CRUD functionality, designed to help users track their daily and monthly expenses. It provides an easy-to-use interface for managing and visualizing spending habits, enabling better financial management.",
  },
  {
    id: 4,
    title: "Blossom",
    image: "https://s.tmimgcdn.com/scr/800x500/86500/blossom-beauty-store-opencart-template_86585-2-original.jpg",
    description:
      "Blossom is a responsive beauty e-commerce platform built with Html,Css,Javascript and Php, offering a wide range of skincare, makeup, and hair care products. With intuitive navigation, advanced filters, and a real-time shopping cart, it ensures a seamless shopping experience.",
  },
  {
    id: 5,
    title: "My Portfolio",
    image: "https://www.linkedin.com/dms/prv/vid/v2/D5606AQGzGjA9VJO0DA/messaging-attachmentFile/messaging-attachmentFile/0/1738728449975?m=AQKU-oJPHFSFAwAAAZTUSridKryKxKnHSDEA0zamUwPioiKLxkj4i72DqtU&ne=1&v=beta&t=AdTtxrTBtFHhV63U5SMfSAU3qe1sTTrLD68TjV9lP-0",
    description:
      "Developed this portfolio website using ViteJs,React and Tailwindcss to showcase my skills, projects, and professional journey. Designed with a clean UI and smooth animations to enhance user experience. Deployed on GitHub Pages for easy accessibility. ",
  },
  {
    id: 6,
    title: "Music Verse",
    image: "https://www.linkedin.com/dms/prv/vid/v2/D5606AQGW-z0CHH_FlQ/messaging-attachmentFile/messaging-attachmentFile/0/1738638111815?m=AQKSFITxL05HpgAAAZTO6FA3yA-ZWsmOWmgeJRl7SXeKJmILmTVaVlmhC84&ne=1&v=beta&t=RLyWPMDaqYed__vYvSO5LGhsvniw4bn92R-rP-Ld5fc",
    description:
      "Music Verse is a music website built with React and TailwindCSS, offering features like music streaming, playlist creation, music tutorials, fun games, and information on concerts and events, providing an interactive and engaging music experience.",
  },
];

function Projects() {
  const sliderRef = useRef(null);

  // Scroll slider manually
  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = direction === "left" ? -350 : 350; // Increased scroll amount for wider container
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#00344d]">My Projects</h2>
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => scrollSlider("left")}
            className="text-white bg-gray-800 p-2 rounded-full shadow-lg"
          >
            {"<"}
          </button>
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto w-full max-w-screen-lg px-4"
            style={{
              scrollbarWidth: "none", // Firefox
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-[350px] p-4 rounded-lg shadow-lg flex flex-col items-center bg-[#00344d] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>
                <p className="text-white mt-2">{project.description}</p> {/* Make description always visible */}
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollSlider("right")}
            className="text-white bg-gray-800 p-2 rounded-full shadow-lg"
          >
            {">"}
          </button>
        </div>
      </div>
      <style jsx>{`
        /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default Projects;
