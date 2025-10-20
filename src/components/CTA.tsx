import React from 'react';
import { Github, Plus } from 'lucide-react';

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
      container: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
      title: "text-gray-900 dark:text-white",
      description: "text-gray-700 dark:text-gray-300",
      primaryBtn: "bg-primary-400 hover:bg-primary-500 text-white border-2 border-primary-400 hover:border-primary-500",
      secondaryBtn: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
    },
    secondary: {
      container: "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
      title: "text-gray-900 dark:text-white",
      description: "text-gray-600 dark:text-gray-400",
      primaryBtn: "bg-secondary-500 hover:bg-secondary-600 text-white border-2 border-secondary-500 hover:border-secondary-600",
      secondaryBtn: "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
    },
    hero: {
      container: "bg-primary-50 dark:bg-gray-900 border border-primary-200 dark:border-primary-800",
      title: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4",
      description: "text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed",
      primaryBtn: "bg-primary-400 hover:bg-primary-500 text-white text-lg px-6 py-3 border-2 border-primary-400 hover:border-primary-500",
      secondaryBtn: "bg-transparent text-gray-700 dark:text-gray-300 border-2 border-primary-400 dark:border-primary-500 hover:bg-primary-400 hover:text-white text-lg px-6 py-3"
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={`rounded-3xl p-8 md:p-12 ${currentVariant.container} ${className}`}>
      <div className="text-center max-w-2xl mx-auto">
        <h3 className={`font-bold ${currentVariant.title}`}>
          {title}
        </h3>

        <p className={`mb-8 leading-relaxed ${currentVariant.description}`}>
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={primaryButtonAction}
            className={`inline-flex items-center space-x-2 font-semibold rounded-xl transition-all duration-200 px-4 py-2 ${currentVariant.primaryBtn}`}
          >
            <Github className="w-4 h-4" />
            <span>{primaryButtonText}</span>
          </button>

          <button
            onClick={secondaryButtonAction}
            className={`inline-flex items-center space-x-2 font-semibold rounded-xl transition-all duration-200 px-4 py-2 ${currentVariant.secondaryBtn}`}
          >
            <Plus className="w-4 h-4" />
            <span>{secondaryButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
