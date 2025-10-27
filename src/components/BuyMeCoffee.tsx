import { Coffee, Heart } from "lucide-react";

const BuyMeCoffee = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 rounded-3xl"></div>

        {/* Border */}
        <div className="absolute inset-0 rounded-3xl border border-amber-200/50 dark:border-gray-700/50"></div>

        {/* Content */}
        <div className="relative px-6 sm:px-12 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg shadow-amber-500/20 mb-6">
              <Coffee className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Soutenez le projet 225 Open Source
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Aidez-nous à grandir ! Votre soutien nous permet d'améliorer continuellement la plateforme, 
              d'acquérir un nom de domaine personnalisé et bien plus pour la communauté. 
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.buymeacoffee.com/princekouame"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFDD00] hover:bg-[#FFED4E] text-gray-900 font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Coffee className="w-5 h-5" />
                <span>Je soutiens le projet</span>
              </a>
            </div>
            <div className="flex items-center mt-6 justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Merci pour votre soutien !</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
