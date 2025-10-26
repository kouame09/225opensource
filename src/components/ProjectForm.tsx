import { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectFormProps {
  project?: Project | null;
  onSubmit: (projectData: Omit<Project, 'id'>) => Promise<void>;
  onCancel: () => void;
  isEditing?: boolean;
}

const ProjectForm = ({ project, onSubmit, onCancel, isEditing = false }: ProjectFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    author: '',
    githubUrl: '',
    stars: 0,
    forks: 0,
    techStack: [] as string[],
  });

  const [newTech, setNewTech] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData({
        name: project.name,
        description: project.description,
        author: project.author,
        githubUrl: project.githubUrl,
        stars: project.stars,
        forks: project.forks,
        techStack: project.techStack || [],
      });
    }
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'stars' || name === 'forks' ? parseInt(value) || 0 : value,
    }));
  };

  const handleAddTech = () => {
    if (newTech.trim() && !formData.techStack.includes(newTech.trim())) {
      setFormData((prev) => ({
        ...prev,
        techStack: [...prev.techStack, newTech.trim()],
      }));
      setNewTech('');
    }
  };

  const handleRemoveTech = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.filter((t) => t !== tech),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Add automatic lastUpdate date
      const projectData = {
        ...formData,
        lastUpdate: new Date().toISOString().split('T')[0],
      };
      await onSubmit(projectData);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-3xl w-full my-8 border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isEditing ? 'Modifier le projet' : 'Ajouter un nouveau projet'}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nom du projet *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Mon super projet"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Auteur *
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Prince Kouamé"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
              placeholder="Brève description de votre projet..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              GitHub URL *
            </label>
            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="https://github.com/username/repo"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Stars
              </label>
              <input
                type="number"
                name="stars"
                value={formData.stars}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Forks
              </label>
              <input
                type="number"
                name="forks"
                value={formData.forks}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tech Stack
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-primary-400 focus:border-primary-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Ajouter une technologie"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="px-3 sm:px-4 py-3 bg-primary-400 hover:bg-primary-500 text-white rounded-lg transition-colors flex items-center gap-2 flex-shrink-0"
                title="Ajouter"
              >
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Ajouter</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleRemoveTech(tech)}
                    className="hover:text-primary-900 dark:hover:text-primary-100"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-primary-400 hover:bg-primary-500 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enregistrement...' : isEditing ? 'Modifier le projet' : 'Créer le projet'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
