import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                className="h-64 w-full object-cover md:w-64" 
                src="https://i.postimg.cc/zv0HHQv6/mansitterochprogrammerar-avgrok.jpg" 
                alt="Profile" 
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Junior utvecklare</div>
              <h1 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Adam Folke
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-gray-500">
                Efter att ha arbetat som lärare i närmare 20 år vill jag ge mig själv en utmaning och ta steget in i mjukvaruutvecklingsvärlden. 
                Med starka färdigheter i C# och en kärlek till problemlösning är jag redo för nya utmaningar.
              </p>
              <div className="mt-6 flex space-x-4">
                <a 
                  href="https://github.com/Badwolfpup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/adam-folke-b088412a2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Om mig</h2>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-4">
            När jag var yngre studerade jag programmering på Örebro universitet. Jag fortsatte inte den banan utan kom in i läraryrket istället. Jag har dock alltid haft ett latent intresse och har tagit upp programmering i perioder. 
            Augusti 2023 blev jag lärare i en programmeringskurs i C#. Då väcktes min passion för programmering igen och jag insåg att jag vill byta bana och arbeta med det.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Sedan dess har jag arbetat hårt för att förbättra mina färdigheter i C# och utforska andra programspråk för att bygga en mångsidig portfolio.
          </p>
          <p className="text-lg text-gray-700">
            Min erfarenhet som lärare har utrustat mig med utmärkta kommunikationsförmågor och en samarbetsinriktad inställning. 
            Utforska gärna mina projekt som visar min resa och mina förmågor. Det finns fler projekt på github som inte visar här.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mina projekt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                className="h-48 w-full object-cover" 
                src={project.thumbnail} 
                alt={project.title} 
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{project.shortDescription}</p>
                <Link 
                  to={`/project/${project.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
