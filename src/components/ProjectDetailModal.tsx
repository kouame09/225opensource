import { useEffect } from 'react';
import { X, ExternalLink, Star, GitFork, Calendar, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getGitHubPreviewUrl = (githubUrl: string) => {
    if (project.imageUrl) return project.imageUrl;
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      const [, owner, repo] = match;
      return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
    }
    return null;
  };

  const previewUrl = getGitHubPreviewUrl(project.githubUrl);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-modal-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden animate-modal-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Content */}
        <div className="overflow-y-auto max-h-[85vh]">
          {/* Header Image */}
          {previewUrl && (
            <div className="relative bg-gray-100 dark:bg-gray-800">
              <img
                src={previewUrl}
                alt={project.name}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {/* Main content */}
          <div className="p-8">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {project.name}
            </h2>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary-400" />
                <span className="text-gray-900 dark:text-white font-semibold">
                  {project.stars.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">stars</span>
              </div>

              <div className="flex items-center gap-2">
                <GitFork className="w-5 h-5 text-primary-400" />
                <span className="text-gray-900 dark:text-white font-semibold">
                  {project.forks.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">forks</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{formatDate(project.lastUpdate)}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Description
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Author
              </h3>
              <p className="text-gray-900 dark:text-white font-semibold">{project.author}</p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-400 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
