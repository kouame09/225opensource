import { Moon, Sun, Github } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  handleContribution: () => void;
}

const Header = ({ darkMode, setDarkMode, handleContribution }: HeaderProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            IvoireOS
          </h1>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleContribution}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-primary-400 text-white text-sm font-bold rounded-full hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-400/50 transform hover:scale-105 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>Contribuer</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-primary-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
