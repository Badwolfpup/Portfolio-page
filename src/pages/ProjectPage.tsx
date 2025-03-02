import React from 'react';
import { Github } from 'lucide-react';
import { ProjectType } from '../data/projects';

interface ProjectPageProps {
  project: ProjectType;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{project.title}</h1>
      
      {/* Video Section */}
      <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={project.videoUrl}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      
      {/* Description Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Project Description</h2>
        <div className="prose max-w-none text-gray-700">
          {project.description.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
      
      {/* Technologies Used */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* GitHub Link */}
      <div className="flex justify-center">
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <Github className="h-5 w-5 mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;