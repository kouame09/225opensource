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
  userId?: string; // Firebase user ID of the project owner
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  createdAt: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  isAuthenticated: boolean;
}
