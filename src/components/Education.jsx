import React from "react";

const Education = () => (
  <section id="education" className="bg-blue-50 py-20 px-4">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-1">Bachelor of Information Technology</h3>
          <div className="text-gray-600 mb-2">Flinders University, 2025–present</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-1">Diploma of IT (Advanced Programming)</h3>
          <div className="text-gray-600 mb-2">TAFE SA, 2024–2025</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-1">Certificate IV in IT (Programming)</h3>
          <div className="text-gray-600 mb-2">TAFE SA, 2023–2024</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-1">SACE</h3>
          <div className="text-gray-600 mb-2">Mark Oliphant College, 2022</div>
        </div>
      </div>
    </div>
  </section>
);

export default Education; 