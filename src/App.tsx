import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/Footer';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {projects.map((project) => (
            <Route 
              key={project.id}
              path={`/project/${project.id}`} 
              element={<ProjectPage project={project} />} 
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;