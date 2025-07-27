import React from "react";

const Experience = () => (
  <section id="experience" className="container mx-auto py-20 px-4">
    <h2 className="text-3xl font-bold mb-8">Experience</h2>
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <div className="text-xl font-semibold">IT Support Intern (Simulated Role) &amp; ITWorks Junior Software Engineer (TAFE Practicum)</div>
          <div className="text-gray-600 mt-1 md:mt-0 md:text-right">Adelaide, SA &nbsp; | &nbsp; Jan 2023 – Jun 2025</div>
        </div>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Collaborated in Agile, team-based environment to diagnose and resolve ICT issues.</li>
          <li>Utilized problem-solving and technical communication skills to explain solutions to clients (simulated by lecture).</li>
          <li>Documented solutions and contributed to knowledge sharing among peers.</li>
          <li>Practiced client interaction and user training.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience; 