import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import WelcomeModal from '../components/WelcomeModal';
import ProjectCard from '../components/ProjectCard';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import GreenBanner from '../components/GreenBanner';
import InspirationSection from '../components/InspirationSection';
import { Project } from '../types';
import { getAllProjects } from '../services/projectService';
import CTA from '../components/CTA';
import Contributors from '../components/Contributors';
import BuyMeCoffee from '../components/BuyMeCoffee';
import FeatureSection from '../components/FeatureSection';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const welcomeModalClosed = localStorage.getItem('welcomeModalClosed');
      if (!welcomeModalClosed) {
        setShowWelcomeModal(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch all projects from Firebase
        const firebaseProjects = await getAllProjects();
        // Sort by most recent and take only 6 projects
        const sortedProjects = [...firebaseProjects].sort((a: Project, b: Project) =>
          new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
        );
        setProjects(sortedProjects.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleContribution = () => {
    window.open('https://github.com/kouame09/225opensource', '_blank');
  };

  const handleCreateAccount = () => {
    navigate('/auth');
  };



  if (showLoader) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="opacity-0 pointer-events-none">
          <Hero />
        </div>
        <Loader onLoadingComplete={() => setShowLoader(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 animate-fade-in pt-20">
      <Hero />

      {/* Section Bannière verte */}
      <GreenBanner />

      {/* Section Inspiration avec texte, chiffres et citation */}
      <InspirationSection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16 lg:pb-20">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-400"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {projects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {/* Bouton Voir tous les projets */}
            <div className="flex justify-center mt-12">
              <button
                onClick={() => navigate('/projects')}
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-transparent text-primary-400 text-lg font-bold rounded-xl border-2 border-primary-400 hover:bg-primary-400 hover:text-white hover:shadow-lg hover:shadow-primary-400/50 transform hover:scale-105 transition-all duration-200"
              >
                <span>Voir tous les projets</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </>
        )}
      </main>

      <FeatureSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24 lg:pb-32">
        <CTA
          variant="hero"
          title="Prêt à contribuer ?"
          description="Que vous soyez développeur web, mobile, backend ou fullstack, data analyst, data scientist, cybersécurité, DevOps..., votre contribution compte.
          Rejoignez-nous pour enrichir l'écosystème open-source ivoirien."
          primaryButtonText="Contribuer au projet"
          primaryButtonAction={handleContribution}
          secondaryButtonText="Créer un compte"
          secondaryButtonAction={handleCreateAccount}
        />
      </div>

      <Contributors />

      <BuyMeCoffee />

      <Footer />

      {isAuthenticated && (
        <button
          onClick={() => navigate('/dashboard')}
          className="group fixed bottom-6 right-6 z-50 bg-primary-400 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out w-12 h-12 hover:w-auto hover:pr-4 flex items-center justify-center overflow-hidden"
          title="Go to Dashboard"
        >
          <div className="flex items-center justify-center w-12 h-12 flex-shrink-0">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <span className="max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-sm font-semibold whitespace-nowrap pr-1">
            Dashboard
          </span>
        </button>
      )}

      <WelcomeModal
        isOpen={showWelcomeModal}
        onClose={() => {
          setShowWelcomeModal(false);
          localStorage.setItem('welcomeModalClosed', 'true');
        }}
      />
    </div>
  );
};

export default Home;
