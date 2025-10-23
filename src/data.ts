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
    name: 'Snake Game',
    description: 'Jeu snake game dans le ne navigateur.',
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
    author: 'Prince K.',
    githubUrl: 'https://github.com/kouame09/snakeGameClone',
    stars: 189,
    forks: 45,
    lastUpdate: '2025-10-20'
  },
  {
    id: '3',
    name: 'Envoi/reception Mail',
    description: 'Serveur Node.js léger permettant de recevoir des messages depuis un formulaire de contact et de les envoyer par e-mail via Nodemailer.',
    techStack: ['NodeJS', 'JavaScript', 'TailwindCSS'],
    author: 'Konan Kouadio Aymard',
    githubUrl: 'https://github.com/aymardknn/Envoi-de-mail',
    stars: 100,
    forks: 50,
    lastUpdate: '2025-10-25'
  },
  
];
