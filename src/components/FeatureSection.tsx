import { Code2, Rocket, BookOpen, Shield, Globe, Users, TrendingUp } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
          <span className="text-sm font-semibold text-green-600 dark:text-primary-400">
            L'Open Source Ivoirien
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-tight mb-6">
          Pourquoi une dynamique <span className="text-primary-400 dark:text-primary-400">open source</span> 
          <br />pour la Côte d'Ivoire ?
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          225 Open Source n'est pas qu'une plateforme, c'est un mouvement stratégique pour 
          construire l'avenir numérique de notre pays à travers 5 piliers fondamentaux.
        </p>
      </div>

      {/* Feature 1: Formation Continue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        {/* Left side - Illustration */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl transform -rotate-3"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mx-auto">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">∞</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Apprentissage continu</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                <div className="space-y-2">
                  <div className="h-2 bg-blue-400 rounded w-full"></div>
                  <div className="h-2 bg-indigo-400 rounded w-4/5"></div>
                  <div className="h-2 bg-purple-400 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="space-y-6 order-1 lg:order-2">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
            Formation Continue
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            L'open source est une école à ciel ouvert où chaque développeur ivoirien peut 
            apprendre, progresser et se perfectionner en pratique réelle.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mt-1">
                <Code2 className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Apprendre en pratiquant
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Accès à des projets réels pour développer des compétences concrètes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mt-1">
                <Users className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Progresser en collaborant
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mentorat par les développeurs expérimentés de la communauté
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Accélérateur d'Innovation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
            Accélérateur d'Innovation
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            L'open source fournit les fondations solides pour bâtir des projets innovants 
            et accélérer la création de startups technologiques ivoiriennes.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mt-1">
                <Rocket className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Prototypage rapide
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Réduire le temps de développement grâce aux composants existants
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mt-1">
                <TrendingUp className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Écosystème startup
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Base solide pour l'émergence de nouvelles entreprises tech
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl transform rotate-3"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mx-auto">
                <Rocket className="w-8 h-8 text-orange-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-orange-500">2x</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Vitesse de développement</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-red-500">60%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Coûts réduits</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 border border-orange-200/50 dark:border-orange-800/50">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-orange-700 dark:text-orange-400">
                  Innovation en cours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3: Indépendance Numérique */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        {/* Left side - Illustration */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/20 rounded-3xl transform -rotate-3"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mx-auto">
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">🇨🇮</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Souveraineté numérique</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    <div className="h-2 bg-primary-400 rounded flex-1"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    <div className="h-2 bg-primary-400 rounded flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="space-y-6 order-1 lg:order-2">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
            Indépendance Numérique
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            La souveraineté numérique passe par la maîtrise de nos outils technologiques. 
            L'open source nous offre cette indépendance stratégique.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mt-1">
                <Shield className="w-4 h-4 text-primary-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Sécurité des données
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Contrôle total sur nos infrastructures et informations sensibles
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mt-1">
                <Globe className="w-4 h-4 text-primary-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Autonomie technologique
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Moins de dépendance vis-à-vis des solutions étrangères
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 4: Visibilité */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
            Visibilité
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            L'open source offre une portée nationale et mondiale, mettant en lumière 
            l'excellence technologique ivoirienne sur la scène internationale.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mt-1">
                <Globe className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Portée mondiale
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Nos projets découverts et utilisés par des millions de développeurs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mt-1">
                <Users className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Reconnaissance internationale
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mise en avant du talent et de l'innovation ivoiriens
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl transform rotate-3"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mx-auto">
                <Globe className="w-8 h-8 text-purple-500" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">🌍</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Connecté au monde</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-500">150+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Pays atteints</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pink-500">10K+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Utilisateurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 5: Économie Collaborative */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Illustration */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-3xl transform -rotate-3"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mx-auto">
                <TrendingUp className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">💰</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Croissance économique</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                <div className="space-y-2">
                  <div className="h-2 bg-yellow-400 rounded w-full"></div>
                  <div className="h-2 bg-amber-400 rounded w-4/5"></div>
                  <div className="h-2 bg-orange-400 rounded w-3/5"></div>
                  <div className="h-2 bg-red-400 rounded w-2/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="space-y-6 order-1 lg:order-2">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
            Économie Collaborative
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            L'open source stimule la croissance économique en créant des opportunités 
            de collaboration et de monétisation pour les développeurs ivoiriens.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mt-1">
                <TrendingUp className="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Nouveaux revenus
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Services support, formations, et maintenances autour des projets
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mt-1">
                <Users className="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Écosystème florissant
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Création d'emplois et d'entreprises autour de l'open source
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
