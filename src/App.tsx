import { useState, useEffect, useMemo } from 'react';
import { ArrowUpDown, Tag, Plus } from 'lucide-react';
import WelcomeModal from './components/WelcomeModal';
import ProjectGrid from './components/ProjectGrid';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { Project } from './types';
import { mockProjects } from './data';
import CTA from './components/CTA';
import Contributors from './components/Contributors';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
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
    const timer = setTimeout(() => {
      // Vérifier si l'utilisateur a déjà fermé le modal
      const welcomeModalClosed = localStorage.getItem('welcomeModalClosed');
      if (!welcomeModalClosed) {
        setShowWelcomeModal(true);
      }
    }, 3500); // Afficher le modal après le loader

    return () => clearTimeout(timer);
  }, []);

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
    window.open('https://github.com/kouame09/225opensource', '_blank');
  };

  const handleAddProject = () => {
    window.open('https://github.com/kouame09/225opensource/blob/main/src/data.ts', '_blank');
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

  if (showLoader) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Contenu principal masqué */}
        <div className="opacity-0 pointer-events-none">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} handleContribution={handleContribution} />
          <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <ArrowUpDown className="w-4 h-4 text-primary-400" />
                    <span>Trier par:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setSortBy('recent')} className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${sortBy === 'recent' ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>Récent</button>
                    <button onClick={() => setSortBy('popular')} className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${sortBy === 'popular' ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>Populaire</button>
                    <button onClick={() => setSortBy('alphabetical')} className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${sortBy === 'alphabetical' ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>A à Z</button>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <Tag className="w-4 h-4 text-primary-400" />
                    <span>Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setSelectedTech('')} className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${selectedTech === '' ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>Toutes</button>
                    {allTechnologies.map((tech: string) => (
                      <button key={tech} onClick={() => setSelectedTech(tech)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${selectedTech === tech ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>{tech}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-24 sm:pb-32 lg:pb-40">
            <ProjectGrid projects={filteredProjects} loading={loading} />
          </main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24 lg:pb-32">
            <CTA variant="hero" title="Prêt à contribuer ?" description="Que vous soyez développeur web, mobile, backend ou fullstack, data analyst, data scientist, cybersécurité, DevOps..., votre contribution compte. Rejoignez-nous pour enrichir l'écosystème open-source ivoirien." primaryButtonText="Contribuer au projet" primaryButtonAction={handleContribution} secondaryButtonText="Ajouter votre projet" secondaryButtonAction={handleAddProject} />
          </div>
          <Contributors />
          <Footer />
          <button onClick={() => window.open('https://github.com/kouame09/225opensource/blob/main/src/data.ts', '_blank')} className="group fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out w-12 h-12 hover:w-auto hover:pr-4 flex items-center justify-center overflow-hidden" title="Voir le fichier data.ts sur GitHub">
            <div className="flex items-center justify-center w-12 h-12 flex-shrink-0">
              <Plus className="w-6 h-6" />
            </div>
            <span className="max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-sm font-semibold whitespace-nowrap pr-1">Ajouter un projet</span>
          </button>
          <WelcomeModal isOpen={showWelcomeModal} onClose={() => { setShowWelcomeModal(false); localStorage.setItem('welcomeModalClosed', 'true'); }} />
        </div>

        {/* Loader par-dessus avec animation de glissement */}
        <Loader onLoadingComplete={() => setShowLoader(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 animate-fade-in">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleContribution={handleContribution}
      />

      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
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
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${sortBy === 'recent'
                      ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  Récent
                </button>
                <button
                  onClick={() => setSortBy('popular')}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${sortBy === 'popular'
                      ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  Populaire
                </button>
                <button
                  onClick={() => setSortBy('alphabetical')}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${sortBy === 'alphabetical'
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
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${selectedTech === ''
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
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${selectedTech === tech
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-24 sm:pb-32 lg:pb-40">
        <ProjectGrid projects={filteredProjects} loading={loading} />
      </main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24 lg:pb-32">
        <CTA
          variant="hero"
          title="Prêt à contribuer ?"
          description="Que vous soyez développeur web, mobile, backend ou fullstack, data analyst, data scientist, cybersécurité, DevOps..., votre contribution compte.
          Rejoignez-nous pour enrichir l'écosystème open-source ivoirien."
          primaryButtonText="Contribuer au projet"
          primaryButtonAction={handleContribution}
          secondaryButtonText="Ajouter votre projet"
          secondaryButtonAction={handleAddProject}
        />
      </div>

      <Contributors />

      <Footer />

      {/* Bouton flottant vers data.ts */}
      <button
        onClick={() => window.open('https://github.com/kouame09/225opensource/blob/main/src/data.ts', '_blank')}
        className="group fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out w-12 h-12 hover:w-auto hover:pr-4 flex items-center justify-center overflow-hidden"
        title="Voir le fichier data.ts sur GitHub"
      >
        <div className="flex items-center justify-center w-12 h-12 flex-shrink-0">
          <Plus className="w-6 h-6" />
        </div>
        <span className="max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-sm font-semibold whitespace-nowrap pr-1">
          Ajouter un projet
        </span>
      </button>

      {/* Modal de bienvenue */}
      <WelcomeModal
        isOpen={showWelcomeModal}
        onClose={() => {
          setShowWelcomeModal(false);
          localStorage.setItem('welcomeModalClosed', 'true');
        }}
      />
    </div>
  );
}

export default App;