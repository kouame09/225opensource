import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, GitFork, Calendar, Github, ArrowLeft, Share2 } from 'lucide-react';
import { Project } from '../types';
import { getProjectByName } from '../services/projectService';

const ProjectDetail = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      if (!name) {
        navigate('/');
        return;
      }

      try {
        // Convert slug back to name with spaces
        const projectName = name.replace(/-/g, ' ');
        const projectData = await getProjectByName(projectName);
        if (projectData) {
          setProject(projectData);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error loading project:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [name, navigate]);

  const getGitHubPreviewUrl = (githubUrl: string) => {
    if (project?.imageUrl) return project.imageUrl;
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      const [, owner, repo] = match;
      return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
    }
    return null;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: `${project?.name} - 225 OpenSource`,
      text: `🚀 Voici ${project?.name} ! Un projet open source disponible sur 225 Open Source 🇨🇮, développé avec ${project?.techStack.slice(0, 2).join(", ")}. ! Clique ici pour le consulter :`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Back Button Skeleton */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
            {/* Image Skeleton */}
            <div className="relative bg-gray-200 dark:bg-gray-800 h-96 animate-pulse"></div>

            {/* Content */}
            <div className="p-8 sm:p-12">
              {/* Title Skeleton */}
              <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8 animate-pulse"></div>

              {/* Stats Skeleton */}
              <div className="flex gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              </div>

              {/* Description Skeleton */}
              <div className="mb-8">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Tech Stack Skeleton */}
              <div className="mb-10">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-4 animate-pulse"></div>
                <div className="flex flex-wrap gap-3">
                  <div className="h-9 w-20 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                  <div className="h-9 w-24 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                  <div className="h-9 w-28 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                </div>
              </div>

              {/* Author Skeleton */}
              <div className="mb-10">
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded mb-3 animate-pulse"></div>
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              </div>

              {/* Buttons Skeleton */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 sm:flex-[2] h-14 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                <div className="flex-1 h-14 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  const previewUrl = getGitHubPreviewUrl(project.githubUrl);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 animate-fade-in">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-400 transition-colors font-medium group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-slide-up">
        <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Header Image */}
          {previewUrl && (
            <div className="relative bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800">
              <img
                src={previewUrl}
                alt={project.name}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8 sm:p-12">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in-delay">
              {project.name}
            </h1>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800 animate-fade-in-delay-2">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary-400" />
                <span className="text-gray-900 dark:text-white font-medium text-lg">
                  {project.stars.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">stars</span>
              </div>

              <div className="flex items-center gap-2">
                <GitFork className="w-5 h-5 text-primary-400" />
                <span className="text-gray-900 dark:text-white font-medium text-lg">
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
            <div className="mb-8 animate-fade-in-delay-3">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Description
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-10 animate-fade-in-delay-4">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="mb-10 animate-fade-in-delay-5">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Auteur
              </h2>
              <p className="text-gray-900 dark:text-white font-medium text-lg">{project.author}</p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-[2] flex items-center justify-center gap-2 px-6 py-4 bg-primary-400 text-white font-medium rounded-xl hover:bg-primary-500 transition-all duration-200 hover:shadow-lg hover:shadow-primary-400/50 transform hover:scale-[1.02]"
              >
                <Github className="w-5 h-5" />
                <span>Voir sur GitHub</span>
              </a>
              
              <button
                onClick={handleShare}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-gray-800 text-primary-400 dark:text-primary-300 font-medium rounded-xl border-2 border-primary-400 dark:border-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 hover:shadow-lg hover:shadow-primary-400/30 transform hover:scale-[1.02]"
              >
                <Share2 className="w-5 h-5" />
                <span>Partager le projet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
