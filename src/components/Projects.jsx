import React from "react";

const Projects = () => (
  <section id="projects" className="container mx-auto py-20 px-4">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Soundify Project Card */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col">
        <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center text-5xl text-gray-300">🎵</div>
        <h3 className="text-2xl font-semibold mb-2">Soundify</h3>
        <p className="mb-2">Spotify clone using React and Node.js. User authentication (OAuth), Spotify API integration, and local music upload/playback.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Node.js</span>
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">OAuth</span>
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Spotify API</span>
        </div>
        <a href="https://github.com/WyattPC/Soundify-lite" target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition">GitHub Repo</a>
      </div>
      {/* Placeholder for future projects */}
      <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-xl">Future Project</div>
    </div>
  </section>
);

export default Projects; 