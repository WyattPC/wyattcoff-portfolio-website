import React from "react";

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white text-center py-24 px-4">
    <div className="w-32 h-32 bg-gray-200 rounded-full mb-6 flex items-center justify-center text-4xl text-gray-400">👤</div>
    <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Wyatt Coff</h1>
    <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-2">Software Developer</h2>
    <p className="text-lg text-gray-600 mb-4">Adelaide, SA</p>
    <p className="text-lg md:text-xl mb-6">Passionate about building impactful software.</p>
    <a
      href="/Wyatt_Coff_Resume_2025.pdf"
      download
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
    >
      Download Resume
    </a>
  </section>
);

export default Hero; 