import { Code2, Rocket, Heart } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full">
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
              L'Open Source Ivoirien
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
            Construisons l'avenir de la tech ivoirienne
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            225 OpenSource n’est pas qu’une plateforme, c’est un mouvement qui rassemble tous les professionnels de la tech
            ivoirienne : génie logiciel, data science, cybersécurité, réseaux
            informatiques, et bien plus encore pour créer, partager et innover
            ensemble.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Code de qualité
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Des projets soigneusement documentés et maintenus par la
                  communauté
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Innovation locale
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Des solutions créées par et pour les développeurs ivoiriens
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Communauté bienveillante
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Un espace d'entraide et de partage de connaissances
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 rounded-3xl transform rotate-3"></div>

          {/* Main illustration container */}
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="space-y-6">
              {/* Code block illustration */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-2 bg-primary-400 rounded w-3/4"></div>
                <div className="h-2 bg-blue-400 rounded w-1/2"></div>
                <div className="h-2 bg-purple-400 rounded w-5/6"></div>
                <div className="h-2 bg-orange-400 rounded w-2/3"></div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4 border border-primary-200/50 dark:border-primary-800/50">
                  <div className="text-2xl font-bold text-primary-400">50+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Projets actifs
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-50 dark:from-orange-900/20 dark:to-orange-900/20 rounded-xl p-4 border border-orange-200/50 dark:border-orange-800/50">
                  <div className="text-2xl font-bold text-orange-400">30+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Développeurs
                  </div>
                </div>
              </div>

              {/* Activity indicator */}
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200/50 dark:border-green-800/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                  Communauté active 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
