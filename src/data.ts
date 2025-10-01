import { Project } from './types';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'IvoireOS',
    description: 'Plateforme de centralisation des projets open-source ivoiriens',
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
    author: 'Dev Ivoirien',
    githubUrl: 'https://github.com/example/ivoireos',
    stars: 245,
    forks: 32,
    lastUpdate: '2025-09-28'
  },
  {
    id: '2',
    name: 'Abidjan Transit',
    description: 'Application de suivi des transports en commun à Abidjan',
    techStack: ['React Native', 'Node.js', 'MongoDB'],
    author: 'Marie K.',
    githubUrl: 'https://github.com/example/abidjan-transit',
    stars: 189,
    forks: 45,
    lastUpdate: '2025-09-25'
  },
  {
    id: '3',
    name: 'AgriTech CI',
    description: 'Solution numérique pour les agriculteurs ivoiriens',
    techStack: ['Vue.js', 'Python', 'PostgreSQL'],
    author: 'Kouassi A.',
    githubUrl: 'https://github.com/example/agritech-ci',
    stars: 567,
    forks: 89,
    lastUpdate: '2025-09-30'
  },
  {
    id: '4',
    name: 'Educonnect',
    description: 'Plateforme d\'éducation en ligne pour étudiants ivoiriens',
    techStack: ['Next.js', 'Firebase', 'TailwindCSS'],
    author: 'Aya B.',
    githubUrl: 'https://github.com/example/educonnect',
    stars: 423,
    forks: 67,
    lastUpdate: '2025-10-01'
  },
  {
    id: '5',
    name: 'CI Market',
    description: 'Marketplace pour artisans et commerçants locaux',
    techStack: ['Angular', 'Express', 'MySQL'],
    author: 'Yao T.',
    githubUrl: 'https://github.com/example/ci-market',
    stars: 312,
    forks: 54,
    lastUpdate: '2025-09-20'
  },
  {
    id: '6',
    name: 'HealthTrack CI',
    description: 'Système de gestion de dossiers médicaux électroniques',
    techStack: ['React', 'Django', 'Redis'],
    author: 'Dr. Diallo',
    githubUrl: 'https://github.com/example/healthtrack-ci',
    stars: 678,
    forks: 112,
    lastUpdate: '2025-09-27'
  }
];
