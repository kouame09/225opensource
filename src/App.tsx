import { useState, useEffect, useMemo } from 'react';
import { Plus, ArrowUpDown, Tag } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Project } from './types';
import { mockProjects } from './data';
import CTA from './components/CTA';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'alphabetical'>('recent');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
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
    window.open('https://github.com/kouame09/Ivoire_os', '_blank');
  };

  const handleAddProject = () => {
    window.open('https://github.com/kouame09/Ivoire_os/blob/main/src/data.ts', '_blank');
  };

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project: Project) => {
      project.techStack.forEach((tech: string) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let filtered = projects.filter((project: Project) => {
      const matchesSearch = searchQuery === '' ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTech = selectedTech === '' ||
        project.techStack.includes(selectedTech);

      return matchesSearch && matchesTech;
    });

    if (sortBy === 'recent') {
      filtered = [...filtered].sort((a: Project, b: Project) =>
        new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
      );
    } else if (sortBy === 'popular') {
      filtered = [...filtered].sort((a: Project, b: Project) => b.stars - a.stars);
    } else if (sortBy === 'alphabetical') {
      filtered = [...filtered].sort((a: Project, b: Project) =>
        a.name.localeCompare(b.name, 'fr')
      );
    }
    return filtered;
  }, [projects, searchQuery, selectedTech, sortBy]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleContribution={handleContribution}
      />

      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <ArrowUpDown className="w-4 h-4 text-primary-400" />
                <span>Trier par:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSortBy('recent')}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    sortBy === 'recent'
                      ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Récent
                </button>
                <button
                  onClick={() => setSortBy('popular')}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    sortBy === 'popular'
                      ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Populaire
                </button>
                <button
                  onClick={() => setSortBy('alphabetical')}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    sortBy === 'alphabetical'
                      ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  A à Z
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <Tag className="w-4 h-4 text-primary-400" />
                <span>Technologies:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTech('')}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    selectedTech === ''
                      ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Toutes
                </button>
                {allTechnologies.map((tech: string) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      selectedTech === tech
                        ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
              {filteredProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTA
          variant="hero"
          title="Prêt à contribuer ?"
          description="Que vous soyez développeur, designer ou simplement passionné par la tech ivoirienne, votre contribution compte. Rejoignez-nous pour enrichir l'écosystème open-source de Côte d'Ivoire."
          primaryButtonText="Contribuer au projet"
          primaryButtonAction={handleContribution}
          secondaryButtonText="Ajouter votre projet"
          secondaryButtonAction={handleAddProject}
        />
      </div>

      <button
        onClick={handleAddProject}
        className="fixed bottom-8 right-8 bg-primary-400 text-white rounded-full p-5 shadow-2xl hover:shadow-primary-400/50 hover:bg-primary-500 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group font-semibold"
        aria-label="Ajouter un projet"
      >
        <Plus className="w-6 h-6" />
        <span className="hidden group-hover:inline-block pr-2 whitespace-nowrap">
          Ajouter un projet
        </span>
      </button>

      <Footer />
    </div>
  );
}

export default App;