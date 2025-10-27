import { Moon, Sun, Github, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { logout } from '../services/authService';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  handleContribution: () => void;
}

const Header = ({ darkMode, setDarkMode, handleContribution }: HeaderProps) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate('/auth');
  };

  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-1 cursor-pointer" onClick={handleLogoClick}>
            <img
              src="/logo.png"
              alt="225OpenSource Logo"
              className="w-10 h-10 rounded-lg"
            />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              225OS
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleContribution}
                  className="hidden md:inline-flex items-center space-x-2 px-4 py-2 bg-primary-400 text-white text-sm font-bold rounded-xl border-2 border-primary-400 hover:bg-primary-500 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-400/50 transform hover:scale-105 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>Contribuer</span>
                </button>
                
                {location.pathname === '/dashboard' && (
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-xl border-2 border-red-500 hover:bg-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-400/50 transform hover:scale-105 transition-all duration-200"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                )}
              </>
            ) : (
              <>
                <button
                  onClick={handleContribution}
                  className="hidden md:inline-flex items-center space-x-2 px-4 py-2 bg-primary-400 text-white text-sm font-bold rounded-xl border-2 border-primary-400 hover:bg-primary-500 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-400/50 transform hover:scale-105 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>Contribuer</span>
                </button>
                
                {location.pathname !== '/auth' && (
                  <button
                    onClick={() => navigate('/auth')}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-xl border-2 border-green-500 hover:bg-green-600 hover:border-green-600 hover:shadow-lg hover:shadow-green-400/50 transform hover:scale-105 transition-all duration-200"
                  >
                    <span>Se connecter</span>
                  </button>
                )}
              </>
            )}

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
