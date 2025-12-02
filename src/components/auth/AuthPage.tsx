import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Branding */}
        <div className="flex-1 text-left space-y-8">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              225 <span className="text-primary-400">OpenSource</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Gérez, découvrez et partagez des projets open-source avec la communauté tech ivoirienne.
            </p>
          </div>

          {/* Illustration minimaliste */}
          <div className="hidden md:block relative max-w-md">
            <div className="bg-gradient-to-br from-primary-50 to-green-50 dark:from-primary-900/20 dark:to-green-900/20 rounded-2xl p-8 border-2 border-primary-200 dark:border-primary-800/50">
              {/* Code blocks illustration */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary-400"></div>
                  <div className="flex-1 h-3 bg-primary-400/30 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 pl-6">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="flex-1 h-3 bg-green-400/30 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 pl-12">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <div className="flex-1 h-3 bg-blue-400/30 rounded-full w-3/4"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <div className="flex-1 h-3 bg-orange-400/30 rounded-full w-4/5"></div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="mt-6 flex gap-3">
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                  <div className="text-2xl font-bold text-primary-400">100+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Projets</div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                  <div className="text-2xl font-bold text-green-400">50+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Développeurs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="flex flex-wrap gap-4 justify-start">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Partager des projets</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Montrez votre travail</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Se connecter</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Rejoignez la communauté</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Auth form */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          {isLogin ? (
            <Login onToggleMode={() => setIsLogin(false)} />
          ) : (
            <Register onToggleMode={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
