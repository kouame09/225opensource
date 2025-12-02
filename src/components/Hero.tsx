const Hero = () => {
  return (
    <div className="pt-24 pb-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          La vitrine des projets <br />open-source de
          <span className="block mt-3 text-ivory-orange">
            Côte <span className="text-primary-400 ">d'Ivoire</span>
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Plateforme collaborative pour promouvoir l’open-source en Côte d’Ivoire. Explorez, découvrez et contribuez à des projets passionnants.
        </p>
      </div>
    </div>
  );
};

export default Hero;
