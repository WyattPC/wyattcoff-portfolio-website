import React from "react";

const Header = () => (
  <header className="sticky top-0 z-50 bg-white shadow">
    <nav className="container mx-auto flex justify-between items-center py-4 px-6">
      <div className="text-2xl font-bold tracking-tight">Wyatt Coff</div>
      <ul className="flex space-x-6 text-lg">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
        <li><a href="#education" className="hover:text-blue-600">Education</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header; 