import { useState, useEffect, useMemo } from 'react';
import { ArrowUpDown, Tag, Search } from 'lucide-react';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';
import { Project } from '../types';
import { getAllProjects } from '../services/projectService';

const AllProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'alphabetical'>('recent');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const firebaseProjects = await getAllProjects();
        setProjects(firebaseProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 animate-fade-in pt-20">
      {/* Hero Section avec barre de recherche */}
      <div className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white leading-tight">
              Tous les projets
              <span className="block text-primary-400 mt-2">Open Source</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez l'ensemble des projets open source de 225 Open Source
            </p>

            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5 transition-colors group-focus-within:text-primary-400" />
                <input
                  type="text"
                  placeholder="Rechercher un projet, un auteur, une technologie..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 text-base bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-primary-400 dark:focus:border-primary-400 focus:ring-1 focus:ring-primary-400 dark:focus:ring-primary-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtres et tri */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 lg:pb-16">
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-6">
            {/* Tri */}
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

            {/* Technologies */}
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

      {/* Grille de projets avec pagination */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-24 sm:pb-32 lg:pb-40">
        <ProjectGrid projects={filteredProjects} loading={loading} />
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;
