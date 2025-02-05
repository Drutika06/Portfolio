import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-10">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-[#005a7a]">About</span> <span className="text-[#0084b3]">Me</span>
      </h2>
      
      <div
        className="border p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 bg-[#005a7a]"
      >
        <p className="text-lg text-center mb-4 text-white">
          I am a passionate and dedicated full-stack developer currently studying Computer Science and Engineering at SRM University, with a specialization in AI/ML, and maintaining a strong academic record. I have proficiency in ML, full stack development, focusing on building dynamic, responsive, and well-designed web applications. I am committed to continuous learning and adapting to emerging technologies, ensuring my skills stay aligned with the latest industry trends. I focus on applying this knowledge to real-world projects, delivering innovative solutions that address complex challenges. With expertise in modern programming languages, frameworks, and libraries, I am committed to continuous learning and applying cutting-edge technologies to efficiently solve real-world problems. My strengths include a deep understanding of machine learning and AI concepts, as well as expertise in enabling to craft efficient, scalable, and impactful applications in web development.
        </p>
      </div>

      {/* Experience Section */}
      <div className="border p-8 mt-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 bg-[#00000]">
        <h3 className="text-2xl font-bold mb-4 text-[#00344d]">Experience</h3>
        
        {/* Edunet Experience */}
        <div className="border p-6 rounded-lg bg-[#00344d] shadow-md text-white mb-4">
          <h4 className="text-xl font-bold">Edunet, IBM</h4>
          <p className="text-lg font-medium text-[#00b4d8]">Internship in AI/ML</p>
          <p className="text-sm font-light text-[#bde0fe]">June 2024 – July 2024 · 2 months</p>
          <p className="mt-3">
            Contributed to the <span className="font-medium">Employee Burnout Prediction Analysis</span> project, applying machine learning techniques, including regression analysis, to predict burnout trends in employees. Conducted <span className="font-medium">Exploratory Data Analysis (EDA)</span> to extract meaningful insights and enhance model accuracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
