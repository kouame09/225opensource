# 225 Open Source : Répertoire de Projets Open Source Made in Côte d'Ivoire

Retrouvez les projets open-source de la communauté tech ivoirienne. Explorez, découvrez et contribuez à des projets passionnants.

## Description

Ce projet est un répertoire dédié aux projets open-source développés par la communauté tech ivoirienne. Il vise à promouvoir et à faciliter la découverte de projets innovants, tout en encourageant la collaboration et les contributions.

## Fonctionnalités

- Liste et recherche de projets open-source
- Informations détaillées sur chaque projet
- Interface utilisateur moderne et intuitive
- Support pour les contributions communautaires

## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/kouame09/225opensource.git
   cd 225opensource
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Démarrez le serveur de développement :
   ```bash
   npm start
   ```

4. Ouvrez votre navigateur et accédez à `http://localhost:5173`

## Utilisation

Une fois le serveur démarré, vous pouvez :
- Parcourir la liste des projets
- Rechercher des projets par nom ou technologie
- Voir les détails de chaque projet
- Contribuer en ajoutant vos propres projets

## Contribution

Nous accueillons les contributions de la communauté ! Il y a plusieurs façons de contribuer :

### Ajouter votre projet

Vous avez développé un projet open-source ? Ajoutez-le à notre répertoire !

1. **Éditez le fichier `src/data.ts`**
   ```bash
   # Dans votre fork du projet
   nano src/data.ts  # ou utilisez votre éditeur préféré
   ```

2. **Ajoutez votre projet** en suivant le format spécifié dans les commentaires du fichier `src/data.ts`

3. **Testez vos changements** :
   ```bash
   npm run dev
   ```

4. **Créez une Pull Request** avec une description claire de votre projet

### Contribuer au code

Pour les améliorations du code source :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Signaler un problème

Vous avez trouvé un bug ou avez une suggestion ? [Ouvrez une issue](https://github.com/kouame09/225opensource/issues) sur GitHub.

## Format des projets

Chaque projet doit respecter l'interface `Project` définie dans `src/types/index.ts` :

```typescript
interface Project {
  id: string;           // Identifiant unique
  name: string;         // Nom du projet
  description: string;  // Description courte
  techStack: string[];  // Technologies utilisées
  author: string;       // Votre nom/pseudo
  githubUrl: string;    // Lien vers le repo GitHub
  stars: number;        // Nombre d'étoiles GitHub
  forks: number;        // Nombre de forks GitHub
  lastUpdate: string;   // Format: YYYY-MM-DD
}
```

Consultez les commentaires détaillés dans le fichier `src/data.ts` pour plus d'instructions.

## Technologies utilisées

- React
- TypeScript
- Tailwind CSS
- Vite

## Auteur

Développé par la communauté tech ivoirienne.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
