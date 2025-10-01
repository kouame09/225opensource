import { useState, useEffect } from 'react';
import { Moon, Sun, Plus, ExternalLink } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { Project } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Toggle dark mode class on html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Fetch projects from GitHub JSON file
    const fetchProjects = async () => {
      try {
        // For demo purposes, using mock data
        // Replace this URL with your actual GitHub raw JSON file
        const mockProjects: Project[] = [
          {
            id: '1',
            name: 'IvoireOS',
            description: 'Plateforme de centralisation des projets open-source ivoiriens',
            techStack: ['React', 'TypeScript', 'TailwindCSS'],
            author: 'Dev Ivoirien',
            githubUrl: 'https://github.com/example/ivoireos'
          },
          {
            id: '2',
            name: 'Abidjan Transit',
            description: 'Application de suivi des transports en commun à Abidjan',
            techStack: ['React Native', 'Node.js', 'MongoDB'],
            author: 'Marie K.',
            githubUrl: 'https://github.com/example/abidjan-transit'
          },
          {
            id: '3',
            name: 'AgriTech CI',
            description: 'Solution numérique pour les agriculteurs ivoiriens',
            techStack: ['Vue.js', 'Python', 'PostgreSQL'],
            author: 'Kouassi A.',
            githubUrl: 'https://github.com/example/agritech-ci'
          },
          {
            id: '4',
            name: 'Educonnect',
            description: 'Plateforme d\'éducation en ligne pour étudiants ivoiriens',
            techStack: ['Next.js', 'Firebase', 'TailwindCSS'],
            author: 'Aya B.',
            githubUrl: 'https://github.com/example/educonnect'
          },
          {
            id: '5',
            name: 'CI Market',
            description: 'Marketplace pour artisans et commerçants locaux',
            techStack: ['Angular', 'Express', 'MySQL'],
            author: 'Yao T.',
            githubUrl: 'https://github.com/example/ci-market'
          },
          {
            id: '6',
            name: 'HealthTrack CI',
            description: 'Système de gestion de dossiers médicaux électroniques',
            techStack: ['React', 'Django', 'Redis'],
            author: 'Dr. Diallo',
            githubUrl: 'https://github.com/example/healthtrack-ci'
          }
        ];

        setProjects(mockProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleAddProject = () => {
    // Redirect to GitHub repo for contributing
    window.open('https://github.com/yourusername/ivoireos/blob/main/projects.json', '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-12">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Côte d'Ivoire Dev
              </h1>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                  Accueil
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                  Projets
                </a>
                <a href="#" onClick={handleAddProject} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                  Ajouter un projet
                </a>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-lime-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Projets Open Source
            <span className="block mt-3 text-lime-400">
              Made in Côte d'Ivoire
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Découvrez les projets innovants créés par la communauté des développeurs ivoiriens
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>

      {/* Floating Add Button */}
      <button
        onClick={handleAddProject}
        className="fixed bottom-8 right-8 bg-lime-400 text-gray-900 rounded-full p-5 shadow-2xl hover:shadow-lime-400/50 hover:bg-lime-300 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group font-semibold"
        aria-label="Ajouter un projet"
      >
        <Plus className="w-6 h-6" />
        <span className="hidden group-hover:inline-block pr-2 whitespace-nowrap">
          Ajouter un projet
        </span>
      </button>
    </div>
  );
}

export default App;
