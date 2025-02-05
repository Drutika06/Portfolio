import React from "react";

function Contact() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-wrap justify-between">
          {/* Left Section (Let us connect) */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-[#00344d] mb-4">Let Us Connect</h2>
            <p className="text-lg text-gray-700 mb-4">
              I would love to hear from you! Feel free to reach out if you have any questions, suggestions, or just want to say hello. I’m always open to new opportunities and collaborations.
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Email:</strong> <a href="mailto:your-email@example.com" className="text-blue-600">pidikiti06@gmail.com</a>
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Follow me on:</strong>
            </p>
            <ul className="list-none p-0 flex space-x-4">
              <li>
                <a href="https://www.instagram.com/_.drutika._/?next=%2F&hl=en" className="text-blue-600 hover:underline">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/drutika-pidikiti-0a5913258/" className="text-blue-600 hover:underline">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Drutika06" className="text-blue-600 hover:underline">
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section (Contact Form) */}
          <div className="w-full lg:w-1/2">
            <form className="bg-[#00344d] p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-white">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Message</label>
                <textarea
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Message...."
                ></textarea>
              </div>
              <button className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-400 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

