import { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete();
      }, 600);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-white via-primary-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center transition-all duration-600 ${
        isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative flex flex-col items-center justify-center">
        {/* Logo container with glow */}
        <div className="relative mb-8">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-3xl opacity-30 animate-pulse">
            <div className="w-32 h-32 bg-primary-400 rounded-full"></div>
          </div>
          
          {/* Logo */}
          <div className="relative">
            <img
              src="/logo.png"
              alt="225 OpenSource"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-2xl animate-float"
            />
          </div>
        </div>

        {/* Text animation */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white animate-fade-in">
            225 <span className="text-primary-400">OpenSource</span>
          </h1>
        </div>

        {/* Minimal spinner */}
        <div className="mt-8 flex gap-2">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default Loader;
