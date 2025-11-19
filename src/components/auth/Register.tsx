import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Chrome, MapPin } from 'lucide-react';
import { registerWithEmail, loginWithGoogle } from '../../services/authService';
import { isUserInCoteDivoire } from '../../services/locationService';

interface RegisterProps {
  onToggleMode: () => void;
}

const Register = ({ onToggleMode }: RegisterProps) => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingLocation, setCheckingLocation] = useState(true);
  const [isLocationAllowed, setIsLocationAllowed] = useState(false);

  // Check user location on component mount
  useEffect(() => {
    const checkLocation = async () => {
      try {
        const inCoteDivoire = await isUserInCoteDivoire();
        setIsLocationAllowed(inCoteDivoire);

        if (!inCoteDivoire) {
          setError('Accès restreint : Cette plateforme est réservée aux utilisateurs en Côte d\'Ivoire uniquement.');
        }
      } catch (err) {
        console.error('Error checking location:', err);
        // On error, allow access (fail open) to avoid blocking legitimate users
        setIsLocationAllowed(true);
      } finally {
        setCheckingLocation(false);
      }
    };

    checkLocation();
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLocationAllowed) {
      setError('Accès restreint : Cette plateforme est réservée aux utilisateurs en Côte d\'Ivoire uniquement.');
      return;
    }

    setError('');

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setLoading(true);

    const { user, error: registerError } = await registerWithEmail(email, password, displayName);

    if (registerError) {
      setError(registerError);
      setLoading(false);
    } else if (user) {
      navigate('/dashboard');
    }
  };

  const handleGoogleLogin = async () => {
    if (!isLocationAllowed) {
      setError('Accès restreint : Cette plateforme est réservée aux utilisateurs en Côte d\'Ivoire uniquement.');
      return;
    }

    setError('');
    setLoading(true);

    const { user, error: loginError } = await loginWithGoogle();

    if (loginError) {
      setError(loginError);
      setLoading(false);
    } else if (user) {
      navigate('/dashboard');
    }
  };

  // Show loading state while checking location
  if (checkingLocation) {
    return (
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400 mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Vérification de votre localisation...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Créer un compte
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Rejoignez-nous pour partager vos projets
        </p>

        {!isLocationAllowed && (
          <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-orange-600 dark:text-orange-400 text-sm font-semibold mb-1">
                  Accès restreint
                </p>
                <p className="text-orange-600 dark:text-orange-400 text-sm">
                  Cette plateforme est réservée aux utilisateurs en Côte d'Ivoire uniquement.
                </p>
              </div>
            </div>
          </div>
        )}

        {error && isLocationAllowed && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nom d'affichage
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Votre nom"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Exemple@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !isLocationAllowed}
            className="w-full bg-primary-400 hover:bg-primary-500 text-white font-semibold py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Création du compte...' : 'Créer un compte'}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
          <span className="px-4 text-sm text-gray-500 dark:text-gray-400">ou</span>
          <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading || !isLocationAllowed}
          className="w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Chrome className="w-5 h-5" />
          Continuer avec Google
        </button>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Déjà un compte ?{' '}
          <button
            onClick={onToggleMode}
            className="text-primary-400 hover:text-primary-500 font-semibold"
          >
            Se connecter
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
