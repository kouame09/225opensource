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
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-all duration-600 ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative flex flex-col items-center justify-center">
        {/* Logo container with glow */}
        <div className="relative mb-8">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-3xl opacity-30 animate-pulse">
            <div className="w-32 h-32"></div>
          </div>

          {/* Logo */}
          <div className="relative">
            <img
              src="/logo.png"
              alt="225 OpenSource"
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-3xl animate-zoom-out"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes zoom-out {
          0% {
            transform: scale(2.5);
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            transform: scale(1);
            opacity: 1;
            filter: blur(0);
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

        .animate-zoom-out {
          animation: zoom-out 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.5s both;
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
