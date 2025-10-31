import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Project } from '../types';

const PROJECTS_COLLECTION = 'projects';

// Convert Firestore timestamp to ISO string
const timestampToString = (timestamp: Timestamp | undefined): string => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate().toISOString();
  }
  return new Date().toISOString();
};

// Create a new project
export const createProject = async (projectData: Omit<Project, 'id'>, userId: string) => {
  try {
    const projectWithUser = {
      ...projectData,
      userId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), projectWithUser);
    
    return { 
      id: docRef.id, 
      ...projectData,
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      error: null 
    };
  } catch (error: unknown) {
    console.error('Error creating project:', error);
    return { id: null, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Get all projects for a specific user
export const getUserProjects = async (userId: string): Promise<Project[]> => {
  try {
    const q = query(
      collection(db, PROJECTS_COLLECTION),
      where('userId', '==', userId)
    );

    const querySnapshot = await getDocs(q);
    const projects: Project[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        techStack: data.techStack || [],
        author: data.author,
        githubUrl: data.githubUrl,
        stars: data.stars || 0,
        forks: data.forks || 0,
        lastUpdate: data.lastUpdate,
        imageUrl: data.imageUrl,
        userId: data.userId,
        createdAt: timestampToString(data.createdAt),
        updatedAt: timestampToString(data.updatedAt),
      });
    });

    // Sort by updatedAt in JavaScript instead of Firestore
    projects.sort((a, b) => {
      const dateA = new Date(a.updatedAt || 0).getTime();
      const dateB = new Date(b.updatedAt || 0).getTime();
      return dateB - dateA;
    });

    return projects;
  } catch (error: unknown) {
    console.error('Error fetching user projects:', error);
    return [];
  }
};

// Get all public projects (for home page)
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, PROJECTS_COLLECTION));
    const projects: Project[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        techStack: data.techStack || [],
        author: data.author,
        githubUrl: data.githubUrl,
        stars: data.stars || 0,
        forks: data.forks || 0,
        lastUpdate: data.lastUpdate,
        imageUrl: data.imageUrl,
        userId: data.userId,
        createdAt: timestampToString(data.createdAt),
        updatedAt: timestampToString(data.updatedAt),
      });
    });

    // Sort by updatedAt in JavaScript
    projects.sort((a, b) => {
      const dateA = new Date(a.updatedAt || 0).getTime();
      const dateB = new Date(b.updatedAt || 0).getTime();
      return dateB - dateA;
    });

    return projects;
  } catch (error: unknown) {
    console.error('Error fetching all projects:', error);
    return [];
  }
};

// Get a single project by ID
export const getProjectById = async (projectId: string): Promise<Project | null> => {
  try {
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        name: data.name,
        description: data.description,
        techStack: data.techStack || [],
        author: data.author,
        githubUrl: data.githubUrl,
        stars: data.stars || 0,
        forks: data.forks || 0,
        lastUpdate: data.lastUpdate,
        imageUrl: data.imageUrl,
        userId: data.userId,
        createdAt: timestampToString(data.createdAt),
        updatedAt: timestampToString(data.updatedAt),
      };
    }
    
    return null;
  } catch (error: unknown) {
    console.error('Error fetching project:', error);
    return null;
  }
};

// Get a single project by name
export const getProjectByName = async (projectName: string): Promise<Project | null> => {
  try {
    const q = query(
      collection(db, PROJECTS_COLLECTION),
      where('name', '==', projectName)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data();
      return {
        id: docSnap.id,
        name: data.name,
        description: data.description,
        techStack: data.techStack || [],
        author: data.author,
        githubUrl: data.githubUrl,
        stars: data.stars || 0,
        forks: data.forks || 0,
        lastUpdate: data.lastUpdate,
        imageUrl: data.imageUrl,
        userId: data.userId,
        createdAt: timestampToString(data.createdAt),
        updatedAt: timestampToString(data.updatedAt),
      };
    }
    
    return null;
  } catch (error: unknown) {
    console.error('Error fetching project by name:', error);
    return null;
  }
};

// Update a project
export const updateProject = async (projectId: string, projectData: Partial<Project>) => {
  try {
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    
    const updateData = {
      ...projectData,
      updatedAt: serverTimestamp(),
    };
    
    // Remove id and userId from update data
    delete updateData.id;
    delete updateData.userId;
    delete updateData.createdAt;

    await updateDoc(docRef, updateData);
    
    return { success: true, error: null };
  } catch (error: unknown) {
    console.error('Error updating project:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Delete a project
export const deleteProject = async (projectId: string) => {
  try {
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    await deleteDoc(docRef);
    
    return { success: true, error: null };
  } catch (error: unknown) {
    console.error('Error deleting project:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Check if user owns a project
export const checkProjectOwnership = async (projectId: string, userId: string): Promise<boolean> => {
  try {
    const project = await getProjectById(projectId);
    return project?.userId === userId;
  } catch (error) {
    console.error('Error checking project ownership:', error);
    return false;
  }
};
