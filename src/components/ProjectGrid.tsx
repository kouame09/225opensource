import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
  loading?: boolean;
}

const ProjectGrid = ({ projects, loading = false }: ProjectGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculer les projets à afficher pour la page actuelle
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return projects.slice(startIndex, endIndex);
  }, [projects, currentPage]);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Navigation entre les pages
  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  // Générer les numéros de page à afficher
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-400"></div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-500 dark:text-gray-400">
          Aucun projet trouvé pour votre recherche
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProjects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Contrôles de pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          {/* Informations sur la page actuelle */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">
              {projects.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
            </span>
            {' - '}
            <span className="font-semibold">
              {Math.min(currentPage * itemsPerPage, projects.length)}
            </span>
            {' sur '}
            <span className="font-semibold">{projects.length}</span> projets
          </div>

          {/* Contrôles de navigation */}
          <div className="flex items-center gap-2">
            {/* Bouton précédent */}
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                currentPage === 1
                  ? 'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-400'
              }`}
              aria-label="Page précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Numéros de page */}
            <div className="flex items-center gap-1">
              {getVisiblePages().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === 'number' && goToPage(page)}
                  disabled={page === '...'}
                  className={`min-w-[40px] h-10 px-3 rounded-lg border transition-all duration-200 ${
                    page === currentPage
                      ? 'bg-primary-400 border-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : page === '...'
                      ? 'border-transparent text-gray-500 dark:text-gray-500 cursor-default'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-400'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Bouton suivant */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                currentPage === totalPages
                  ? 'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-400'
              }`}
              aria-label="Page suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
