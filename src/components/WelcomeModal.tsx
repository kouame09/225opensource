import { useState, useEffect } from 'react';
import { X, Rocket, Terminal, UserCheck, Lightbulb } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal = ({ isOpen, onClose }: WelcomeModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay avec blur */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-2 sm:mx-4 h-[600px] sm:h-[650px] transform transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 z-10"
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>

        <div className="flex flex-col lg:flex-row h-full overflow-hidden">
          {/* Section texte (gauche sur desktop, haut sur mobile) */}
          <div className="flex-1 px-4 sm:px-8 py-6 sm:py-8 lg:pr-4 flex flex-col">
            {/* En-tête avec logo */}
            <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-4">
              <img src="/logo.png" alt="Logo 225OS" className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-2" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                Bienvenue sur 225OS
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4">
                Découvrez, partagez et contribuez aux projets open-source de la communauté tech ivoirienne.
              </p>
              <div className="space-y-2 sm:space-y-3 text-left">
                <div className="p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-600 dark:text-green-300 mb-1 text-xs sm:text-sm flex items-center gap-2">
                    <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
                    Innovation Technologique
                  </h3>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Explorez les projets open-source créées par la communauté tech ivoirienne.
                  </p>
                </div>

                <div className="p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-600 dark:text-blue-300 mb-1 text-xs sm:text-sm flex items-center gap-2">
                    <UserCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                    Collaboration Ouverte
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    Rejoignez une communauté passionnée unis par la passion du code ouvert.
                  </p>
                </div>

                <div className="p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-600 dark:text-purple-300 mb-1 text-xs sm:text-sm flex items-center gap-2">
                    <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
                    Impact Réel
                  </h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400">
                    Vos contributions ont un impact direct sur l'écosystème numérique ivoirien et africain dans son ensemble.
                  </p>
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="space-y-3 mt-auto">
              <button
                onClick={onClose}
                className="w-full px-6 py-3.5 bg-green-500 dark:bg-green-600 text-white text-base font-semibold rounded-xl hover:bg-green-600 dark:hover:bg-green-700 transition-all duration-200"
              >
                Commencer l'exploration
              </button>
            </div>
          </div>

          {/* Section illustration (droite sur desktop, bas sur mobile) */}
          <div className="flex-1 px-4 sm:px-8 py-6 sm:py-8 lg:pl-4 flex flex-col">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-gray-700 h-full flex items-center justify-center">
              <div className="space-y-3 sm:space-y-4 w-full max-w-sm mx-auto">
                {/* Feature 1: Code */}
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg">
                    <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 sm:h-2.5 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-1"></div>
                    <div className="h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>

                {/* Feature 2: Community */}
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg">
                    <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 sm:h-2.5 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-1"></div>
                    <div className="h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/12"></div>
                  </div>
                </div>

                {/* Feature 3: Innovation */}
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-lg">
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 sm:h-2.5 bg-gray-300 dark:bg-gray-600 rounded w-4/5 mb-1"></div>
                    <div className="h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded w-7/12"></div>
                  </div>
                </div>

                {/* Additional visual element */}
                <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Plateforme active</span>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;