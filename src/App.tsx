import { useState, useEffect, useMemo } from 'react';
import { Moon, Sun, Plus, Github, Search, X } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { Project } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('');

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

  const handleContribution = () => {
    window.open('https://github.com/yourusername/ivoireos', '_blank');
  };

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.techStack.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on search query and selected technology
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchQuery === '' ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTech = selectedTech === '' ||
        project.techStack.includes(selectedTech);

      return matchesSearch && matchesTech;
    });
  }, [projects, searchQuery, selectedTech]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Côte d'Ivoire Dev
            </h1>

            <div className="flex items-center space-x-4">
              {/* Contribution Button */}
              <button
                onClick={handleContribution}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-lime-400 text-gray-900 text-sm font-bold rounded-full hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/50 transform hover:scale-105 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>Contribution</span>
              </button>

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
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Projets Open Source
            <span className="block mt-3 text-lime-400">
              Made in Côte d'Ivoire
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Découvrez les projets innovants créés par la communauté des développeurs ivoiriens
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet, auteur ou description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-12 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-full text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-200 text-base font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Filtrer par technologie:</span>
          <button
            onClick={() => setSelectedTech('')}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
              selectedTech === ''
                ? 'bg-lime-400 text-gray-900 shadow-lg shadow-lime-400/50'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Tous
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                selectedTech === tech
                  ? 'bg-lime-400 text-gray-900 shadow-lg shadow-lime-400/50'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-400"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Aucun projet trouvé pour votre recherche
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">{filteredProjects.length}</span> projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Floating Add Button */}
      <button
        onClick={handleContribution}
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
