import React from 'react';
import { Github, Plus, Sparkles, Users } from 'lucide-react';

interface CTAProps {
  variant?: 'primary' | 'secondary' | 'hero';
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  variant = 'primary',
  title = "Rejoignez la communauté",
  description = "Contribuez à la croissance de l'écosystème open-source ivoirien",
  primaryButtonText = "Contribuer",
  primaryButtonAction,
  secondaryButtonText = "Ajouter un projet",
  secondaryButtonAction,
  className = ''
}) => {
  const variants = {
    primary: {
      container: "bg-gradient-to-br from-lime-50 to-green-50 dark:from-gray-900 dark:to-gray-800 border-2 border-lime-200 dark:border-lime-800",
      title: "text-gray-900 dark:text-white",
      description: "text-gray-700 dark:text-gray-300",
      primaryBtn: "bg-lime-400 hover:bg-lime-300 text-gray-900 shadow-lg shadow-lime-400/50 hover:shadow-lime-300/50",
      secondaryBtn: "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-lime-300 dark:border-lime-600 hover:border-lime-400 hover:bg-lime-50 dark:hover:bg-gray-700"
    },
    secondary: {
      container: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-blue-800",
      title: "text-gray-900 dark:text-white",
      description: "text-gray-600 dark:text-gray-400",
      primaryBtn: "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-400/50",
      secondaryBtn: "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-blue-300 dark:border-blue-600 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700"
    },
    hero: {
      container: "bg-gradient-to-br from-lime-100 via-green-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-2 border-lime-300 dark:border-lime-700",
      title: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4",
      description: "text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed",
      primaryBtn: "bg-lime-400 hover:bg-lime-300 text-gray-900 shadow-xl shadow-lime-400/50 hover:shadow-lime-300/50 text-lg px-8 py-4",
      secondaryBtn: "bg-transparent text-gray-700 dark:text-gray-300 border-2 border-lime-400 dark:border-lime-500 hover:bg-lime-400 hover:text-gray-900 dark:hover:text-white text-lg px-8 py-4"
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={`relative overflow-hidden rounded-3xl p-8 md:p-12 ${currentVariant.container} ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4">
          <Sparkles className="w-8 h-8 text-lime-400" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Users className="w-6 h-6 text-green-400" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-gradient-to-br from-lime-200/30 to-green-200/30 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h3 className={`font-bold mb-4 ${currentVariant.title}`}>
          {title}
        </h3>

        <p className={`mb-8 leading-relaxed ${currentVariant.description}`}>
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={primaryButtonAction}
            className={`inline-flex items-center space-x-2 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-400/30 ${currentVariant.primaryBtn}`}
          >
            <Github className="w-5 h-5" />
            <span>{primaryButtonText}</span>
          </button>

          <button
            onClick={secondaryButtonAction}
            className={`inline-flex items-center space-x-2 font-semibold rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-400/30 ${currentVariant.secondaryBtn}`}
          >
            <Plus className="w-5 h-5" />
            <span>{secondaryButtonText}</span>
          </button>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400"></div>
    </div>
  );
};

export default CTA;
