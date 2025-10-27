import { Code2, GitBranch, Users2, Zap, Flame } from 'lucide-react';

const GreenBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-primary-50 to-green-100 dark:from-green-900/20 dark:via-primary-900/20 dark:to-green-800/20 rounded-3xl border-2 border-green-200 dark:border-green-800/50 p-8 sm:p-12 lg:p-16">
        {/* Patterns décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-700/20 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-700/20 rounded-full filter blur-3xl opacity-20" />
        
        {/* Trame de points */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            color: '#22c55e'
          }} />
        </div>

        {/* Contenu */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Texte principal */}
          <div className="flex-1 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 dark:bg-gray-900/80 rounded-full border border-green-300 dark:border-green-700 shadow-sm">
              <span className="text-sm font-semibold text-white dark:text-green-400">
                Bienvenue dans la communauté
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Partagez, Collaborez,
              <span className="block text-green-600 dark:text-green-400 mt-1">
                Innovez ensemble
              </span>
            </h3>
            
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
              Rejoignez une communauté dynamique de professionnels ivoiriens de la tech passionnés par l'open source et l'innovation technologique.
            </p>

            {/* Points clés */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    Contribuez à des projets qui ont un impact
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Des solutions conçues pour répondre aux besoins locaux
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    Apprenez et grandissez avec la communauté
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Partagez vos connaissances et bénéficiez de l'expérience des autres
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    Construisez votre portfolio et votre réseau
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Gagnez en visibilité et connectez-vous avec des professionnels
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration professionnelle */}
          <div className="relative w-full lg:w-auto">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-green-300 dark:border-green-700 shadow-2xl max-w-md mx-auto">
              {/* En-tête avec icône Git */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Open Source</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Collaboration active</div>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">Live</span>
                </div>
              </div>

              {/* Simulation de code/contributions */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    PK
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-green-400 rounded w-3/4 mb-1" />
                    <div className="h-2 bg-green-300 rounded w-1/2" />
                  </div>
                  <Code2 className="w-4 h-4 text-green-600" />
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    AB
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-primary-400 rounded w-2/3 mb-1" />
                    <div className="h-2 bg-primary-300 rounded w-1/3" />
                  </div>
                  <Zap className="w-4 h-4 text-primary-600" />
                </div>

                <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    CM
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-purple-400 rounded w-4/5 mb-1" />
                    <div className="h-2 bg-purple-300 rounded w-2/5" />
                  </div>
                  <Users2 className="w-4 h-4 text-purple-600" />
                </div>
              </div>

              {/* Statistiques en bas */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t-2 border-gray-100 dark:border-gray-800">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">24</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Commits</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-600 dark:text-primary-400">15</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">PRs</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600 dark:text-purple-400">8</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Dev</div>
                </div>
              </div>
            </div>

            {/* Badges flottants */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce">
              +12 aujourd'hui
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              <span>Actif</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenBanner;
