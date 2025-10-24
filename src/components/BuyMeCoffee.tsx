import { Coffee } from 'lucide-react';

const BuyMeCoffee = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24 lg:pb-32">
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 sm:p-12 border border-yellow-200 dark:border-gray-700 shadow-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-16 h-16 bg-[#FFDD00] rounded-full flex items-center justify-center shadow-lg">
            <Coffee className="w-8 h-8 text-black" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Soutenez 225 OpenSource
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl">
              Si vous appréciez cette plateforme et souhaitez soutenir son développement continu, 
              vous pouvez m'offrir un café ! ☕
            </p>
          </div>

          <a 
            href="https://www.buymeacoffee.com/princekouame" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#FFDD00] text-black font-bold rounded-2xl hover:bg-[#e5c700] transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-105"
            style={{ width: '220px', height: '56px' }}
          >
            <Coffee className="h-5 w-5 mr-2" />
            <span>Buy me a coffee</span>
          </a>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Chaque contribution aide à améliorer la plateforme pour toute la communauté 🇨🇮
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
