import { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const text = "225OS";

  useEffect(() => {
    // Durée totale de l'animation
    const timer = setTimeout(() => {
      setIsSliding(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onLoadingComplete, 400); // Attendre la fin de l'animation de sortie
      }, 800); // Durée de l'animation de glissement
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 scale-98 pointer-events-none">
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-all duration-500 ease-in-out ${isSliding ? 'slide-up' : ''}`}>
      {/* Conteneur principal */}
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Logo animé */}
        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
          {text.split('').map((char, index) => {
            const isOrangePart = index < 3; 
            return (
              <span
                key={index}
                className={`text-6xl sm:text-8xl md:text-9xl font-black ${
                  isOrangePart ? 'text-[#FF6600]' : 'text-primary-500'
                }`}
                style={{
                  animation: `bounce-in 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        {/* Texte descriptif */}
        <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-xl sm:text-2xl font-bold text-gray-700 tracking-wide">
            Open Source Ivoirien
          </p>
        </div>

        {/* Barre de progression */}
        <div className="w-64 sm:w-80 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary-500 to-green-500 rounded-full shadow-lg shadow-primary-500/50"
            style={{
              animation: 'progress 2.5s ease-in-out forwards'
            }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(-100px);
          }
          50% {
            transform: scale(1.05) translateY(0);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }

        .slide-up {
          animation: slide-up 0.8s ease-in-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default Loader;
