export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  author: string;
  githubUrl: string;
  stars: number;
  forks: number;
  lastUpdate: string;
  imageUrl?: string; // URL de l'aperçu du repo (Open Graph image)
}
