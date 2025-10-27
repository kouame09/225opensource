import { useEffect, useState } from 'react';
import { Code2, Users, Quote } from 'lucide-react';
import { Project } from '../types';

interface InspirationSectionProps {
  projects: Project[];
}

const InspirationSection = ({ projects }: InspirationSectionProps) => {
  const [animatedStats, setAnimatedStats] = useState({
    totalProjects: 0,
    totalContributors: 0,
  });

  // Calculer les statistiques réelles
  const stats = {
    totalProjects: projects.length,
    totalContributors: new Set(projects.map(p => p.author)).size,
  };

  // Animation des compteurs
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        totalProjects: Math.floor(stats.totalProjects * progress),
        totalContributors: Math.floor(stats.totalContributors * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedStats(stats);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Partie gauche : Texte et chiffres */}
        <div className="space-y-8">
          {/* Titre et description */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full border border-primary-200 dark:border-primary-800">
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Ensemble, nous innovons
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
              L'écosystème <span className="block text-primary-400 m-2">Open Source</span>
              <span className="block mt-2">de Côte d'Ivoire</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Une communauté passionnée qui partage, collabore et construit des solutions innovantes pour transformer le paysage technologique ivoirien et africain globalement.
            </p>
          </div>

          {/* Statistiques minimalistes */}
          <div className="flex gap-8 sm:gap-12">
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white">
                  {animatedStats.totalProjects}
                </span>
                <span className="text-2xl font-semibold text-primary-400">+</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                <Code2 className="w-4 h-4 text-primary-400" />
                <span>Projets Open Source</span>
              </div>
            </div>

            <div className="h-20 w-px bg-gray-200 dark:bg-gray-800" />

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white">
                  {animatedStats.totalContributors}
                </span>
                <span className="text-2xl font-semibold text-primary-400">+</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                <Users className="w-4 h-4 text-primary-400" />
                <span>Développeurs actifs</span>
              </div>
            </div>
          </div>

          {/* Badge de statut */}
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
              <div className="relative w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Communauté active et grandissante
            </span>
          </div>
        </div>

        {/* Partie droite : Citation */}
        <div className="relative">
          {/* Décoration de fond */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-3xl opacity-50 blur-2xl" />
          
          {/* Carte de citation */}
          <div className="relative bg-green-20 dark:bg-gray-900/10 rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Motif de lignes diagonales */}
            <div className="absolute top-0 left-0 right-0 h-24 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="diagonalLines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="20" x2="20" y2="0" stroke="currentColor" strokeWidth="2" className="text-primary-400" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonalLines)" />
              </svg>
            </div>
            
            <Quote className="w-12 h-12 text-primary-400 mb-6 opacity-50 relative z-10" />
            
            <blockquote className="space-y-6">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed">
                "Chaque contribution est une graine plantée pour l'innovation de demain. 
                <span className="block mt-3 text-primary-400">
                  Ensemble, cultivons un écosystème tech ivoirien florissant."
                </span>
              </p>
              
              <footer className="flex items-center gap-3 pt-4 border-t-2 border-gray-100 dark:border-gray-800">
                <div className="flex-1">
                  <cite className="not-italic text-base font-bold text-gray-900 dark:text-white">
                    La communauté 225OS
                  </cite>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    Création · Contribution · Innovation
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationSection;
