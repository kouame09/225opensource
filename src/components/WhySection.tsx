import { Github, Search, MapPin, Users, Code2, ArrowRight } from 'lucide-react';

const WhySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-primary-900/30 rounded-full mb-6">
          <Github className="w-4 h-4 text-green-600 dark:text-primary-400" />
          <span className="text-sm font-semibold text-green-600 dark:text-primary-400">
            Pourquoi 225 Open Source ?
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-tight mb-6">
          Le problème que nous
          <span className="block text-green-500 dark:text-primary-400">
            résolvons ensemble
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          GitHub est la plus grande plateforme open source au monde, mais il manque d'une fonctionnalité cruciale : 
          filtrer les projets par pays. C'est là que 225 Open Source intervient.
        </p>
      </div>

      {/* Problème/Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        {/* Left side - Le problème */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
              <Search className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Le problème
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Pas de filtre pays sur GitHub
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Impossible de découvrir facilement les projets open source créés par des développeurs ivoiriens
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Visibilité limitée
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Les talents ivoiriens restent cachés dans l'océan mondial de projets open source
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-3">
                <Code2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Collaboration fragmentée
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Difficile pour les développeurs ivoiriens de se retrouver et collaborer entre eux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - La solution */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
              <Github className="w-6 h-6 text-primary-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Notre solution
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Centralisation intelligente
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nous agrégeons automatiquement les projets open source ivoiriens depuis GitHub
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Filtrage par pays
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Accès instantané à tous les projets open source créés en Côte d'Ivoire
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Communauté unifiée
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Un espace central pour découvrir, contribuer et collaborer avec les talents locaux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment ça marche */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-50 dark:from-primary-900/20 dark:to-primary-900/20 rounded-3xl p-8 sm:p-12 border border-primary-200 dark:border-primary-800">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Comment ça fonctionne ?
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Une solution simple mais puissante pour connecter l'écosystème ivoirien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-500 dark:bg-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              1. Partage sur GitHub
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Push ton projet open source sur GitHub et mets-le en public pour le rendre accessible à tous
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-500 dark:bg-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              2. Ajoute ici
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Viens uploader ton projet ici afin de permettre qu'on le retrouve facilement dans notre écosystème
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-500 dark:bg-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              3. Collabore
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              La communauté ivoirienne découvre ton projet, y contribue et aide à le faire grandir ensemble
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
