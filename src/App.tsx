import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AuthPage from './components/auth/AuthPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleContribution = () => {
    window.open('https://github.com/kouame09/225opensource', '_blank');
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handleContribution={handleContribution}
          />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;