/**
 * FICHIER DE DONNÉES DES PROJETS OPEN SOURCE IVOIRIENS
 * =====================================================
 *
 * Ce fichier contient la liste des projets open-source de la communauté tech ivoirienne.
 *
 * COMMENT AJOUTER VOTRE PROJET :
 * -----------------------------
 *
 * 1. Créez une nouvelle entrée dans le tableau mockProjects
 * 2. Respectez le format Project défini dans src/types/index.ts
 * 3. Renseignez tous les champs obligatoires :
 *    - id : Un identifiant unique (commencez par un nombre séquentiel)
 *    - name : Nom de votre projet
 *    - description : Description courte et accrocheuse
 *    - techStack : Technologies utilisées (tableau de chaînes)
 *    - author : Votre nom ou pseudo
 *    - githubUrl : Lien vers le repository GitHub
 *    - stars : Nombre d'étoiles sur GitHub (0 si nouveau projet)
 *    - forks : Nombre de forks sur GitHub (0 si nouveau projet)
 *    - lastUpdate : Dernière mise à jour (format: YYYY-MM-DD)
 *    - imageUrl (optionnel) : URL personnalisée de l'aperçu (sinon auto-généré depuis GitHub)
 *
 * EXEMPLE D'AJOUT :
 * -----------------
 * {
 *   id: '8',
 *   name: 'Mon Super Projet',
 *   description: 'Description de ce que fait mon projet',
 *   techStack: ['React', 'Node.js', 'MongoDB'],
 *   author: 'Mon Nom',
 *   githubUrl: 'https://github.com/monusername/monprojet',
 *   stars: 42,
 *   forks: 7,
 *   lastUpdate: '2025-10-20'
 * }
 *
 * IMPORTANT :
 * -----------
 * - Tous les projets doivent être open-source et accessibles sur GitHub
 * - Les technologies doivent être correctement orthographiées
 * - Mettez à jour les statistiques (stars/forks) régulièrement
 * - Respectez l'ordre alphabétique par nom de projet si possible
 *
 * PROCESS DE CONTRIBUTION :
 * -------------------------
 * 1. Fork le repository
 * 2. Modifiez ce fichier data.ts
 * 3. Créez une Pull Request
 * 4. Un maintainer validera votre contribution
 *
 * Pour toute question : ouvrez une issue sur GitHub
 */

import { Project } from './types';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: '225 Open Source',
    description: 'Plateforme collaborative de projets open-source portée par la communauté tech ivoirienne.',
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
    author: 'Prince K.',
    githubUrl: 'https://github.com/kouame09/225opensource',
    stars: 0,
    forks: 1,
    lastUpdate: '2025-10-18'
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
  },
  {
    id: '7',
    name: 'HealthTrack CI',
    description: 'Système de gestion de dossiers médicaux électroniques',
    techStack: ['React', 'Django', 'Redis'],
    author: 'Dr. Diallo',
    githubUrl: 'https://github.com/example/healthtrack-ci',
    stars: 678,
    forks: 112,
    lastUpdate: '2025-09-27'
  },

];