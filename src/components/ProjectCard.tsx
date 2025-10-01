import { ExternalLink, Star, GitFork } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-3xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800 transform hover:-translate-y-2">
      <div className="p-7">
        {/* Project Header */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors mb-3">
            {project.name}
          </h3>
          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
              <Star className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold">{project.stars}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
              <GitFork className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold">{project.forks}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-2 text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-1.5 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-5 border-t border-gray-100 dark:border-gray-800">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Par <span className="font-semibold text-gray-700 dark:text-gray-300">{project.author}</span>
          </span>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-primary-400 text-gray-900 text-sm font-bold rounded-full hover:bg-primary-300 hover:shadow-lg hover:shadow-primary-400/50 transform hover:scale-105 transition-all duration-200"
          >
            <span>Voir +</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
