import React, { useRef, useState } from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      percentage: "80%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      percentage: "75%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      percentage: "60%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "React",
      percentage: "75%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Bootstrap",
      percentage: "50%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      name: "C",
      percentage: "75%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
      name: "C++",
      percentage: "70%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", // Replace with C++ logo if needed
    },
    
    {
      name: "Machine Learning",
      percentage: "70%",
      logo: "https://www.pngfind.com/pngs/m/105-1054207_learning-png-logo-machine-learning-png-transparent-png.png",
    },
    {
      name: "SQL",
      percentage: "65%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    },
    {
      name: "Data Analytics",
      percentage: "65%",
      logo: "https://static.vecteezy.com/system/resources/thumbnails/024/560/761/small_2x/data-analytics-icon-monitoring-big-data-analysis-containing-database-free-png.png",
    },
    {
      name: "Java",
      percentage: "50%",
      logo: "https://w7.pngwing.com/pngs/578/816/png-transparent-java-class-file-java-platform-standard-edition-java-development-kit-java-runtime-environment-coffee-jar-text-class-orange.png",
    },
    {
      name: "Python",
      percentage: "70%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
  ];

  const sliderRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (index) => {
    setSelectedSkill(index);
  };

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = direction === "left" ? -250 : 250;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-10 bg-gray">
      <h2 className="text-4xl font-bold text-[#00344d] mb-8">Skills</h2>
      <div className="flex w-full max-w-screen-lg mb-6">
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
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleSkillClick(index)}
              className="min-w-[250px] p-4 rounded-lg shadow-lg flex flex-col items-center bg-[#00344d]"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-bold text-white">{skill.name}</h3>
              <div className="relative w-24 h-24">
                <svg className="absolute top-0 left-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="100"
                    strokeDashoffset={100 - parseInt(skill.percentage)}
                  />
                </svg>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
                  {skill.percentage}
                </p>
              </div>
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
      <style jsx>{`
        /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Skills;
