import React from "react";

const Skills = () => (
  <section id="skills" className="bg-blue-50 py-20 px-4">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white border px-2 py-1 rounded text-sm">Java</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">Python</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">C#</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">HTML</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">CSS</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">JavaScript</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">Swift</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white border px-2 py-1 rounded text-sm">React</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">OOP</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">RESTful API</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">Frontend/Backend</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">UI/UX</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white border px-2 py-1 rounded text-sm">Agile</span>
            <span className="bg-white border px-2 py-1 rounded text-sm">Cloud (AWS, Azure)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 