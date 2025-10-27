# Firebase Integration - Setup Guide

## 🎯 Overview

This implementation adds comprehensive Firebase backend integration to the 225 OpenSource platform, including:

- ✅ User authentication (Google Sign-In & Email/Password)
- ✅ Protected routes with automatic redirects
- ✅ User-specific project management dashboard
- ✅ CRUD operations for projects (Create, Read, Update, Delete)
- ✅ Firestore database integration
- ✅ Security rules for data protection

---

## 📁 New Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── AuthPage.tsx          # Main authentication page
│   │   ├── Login.tsx              # Login form component
│   │   └── Register.tsx           # Registration form component
│   ├── ProtectedRoute.tsx         # Route protection wrapper
│   ├── ProjectForm.tsx            # Add/Edit project form
│   └── [existing components...]
├── config/
│   └── firebase.ts                # Firebase configuration
├── contexts/
│   └── AuthContext.tsx            # Authentication context provider
├── pages/
│   ├── Home.tsx                   # Public home page
│   └── Dashboard.tsx              # User dashboard (protected)
├── services/
│   ├── authService.ts             # Authentication service
│   └── projectService.ts          # Firestore CRUD operations
├── types/
│   └── index.ts                   # Updated with User & Auth types
└── App.tsx                        # Updated with routing

.env                                # Environment variables (DO NOT COMMIT)
FIRESTORE_SECURITY_RULES.md        # Security rules documentation
```

---

## 🚀 Setup Instructions

### 1. Install Dependencies

Dependencies have already been installed:
- `firebase` - Firebase SDK
- `react-router-dom` - Routing
- `react-firebase-hooks` - Firebase React hooks

### 2. Configure Environment Variables

The `.env` file has been created with your Firebase credentials. **Important**: This file is already added to `.gitignore` to prevent accidental commits.

```env
VITE_FIREBASE_API_KEY=AIzaSyD1iDLEBQd-pfJEUeWUxaJcEu0Q4_0zfx4
VITE_FIREBASE_AUTH_DOMAIN=open-source-34b01.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=open-source-34b01
VITE_FIREBASE_STORAGE_BUCKET=open-source-34b01.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=470987993109
VITE_FIREBASE_APP_ID=1:470987993109:web:c7e6be5afd88c2f13ede1c
VITE_FIREBASE_MEASUREMENT_ID=G-KZX9ENG98D
```

### 3. Enable Authentication in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `open-source-34b01`
3. Navigate to **Authentication** → **Sign-in method**
4. Enable the following providers:
   - ✅ **Google** (configure OAuth consent screen)
   - ✅ **Email/Password**

### 4. Configure Firestore Security Rules

Follow the detailed instructions in `FIRESTORE_SECURITY_RULES.md`:

1. Go to **Firestore Database** → **Rules**
2. Copy the security rules from the documentation file
3. Publish the rules

### 5. Create Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode**
4. Select your preferred location (closest to your users)

---

## 🎨 Features Implemented

### Authentication System

#### Routes:
- `/` - Public home page (shows all projects)
- `/auth` - Authentication page (login/register)
- `/dashboard` - User dashboard (protected, requires authentication)

#### Authentication Flow:
1. Users land on the home page (public)
2. Click "Se connecter" to go to `/auth`
3. Choose between:
   - Email/Password registration
   - Email/Password login
   - Google Sign-In
4. After successful authentication → Redirect to `/dashboard`
5. Clicking the logo returns to home page

#### Header Behavior:
- **Not authenticated**: Shows "Contribuer" and "Se connecter" buttons
- **Authenticated**: Shows username, "Dashboard" button (if not on dashboard), and "Logout" button

### Dashboard Features

#### User Dashboard (`/dashboard`):
- **Stats Overview**:
  - Total projects count
  - Total stars across all projects
  - Total forks across all projects

- **Project Management**:
  - View all user-owned projects
  - Create new projects
  - Edit existing projects
  - Delete projects (with confirmation)

#### Project Form:
- Project name *
- Author name *
- Description *
- GitHub URL *
- Tech stack (multiple tags)
- Stars count
- Forks count
- Last update date

### Security Features

✅ **Route Protection**: Unauthenticated users are redirected to `/auth`  
✅ **Data Isolation**: Users can only manage their own projects  
✅ **Public Reading**: Anyone can view all projects on the home page  
✅ **Ownership Validation**: Firestore rules enforce user ownership  

---

## 🔧 How to Use

### Starting the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Testing Authentication

1. **Register a new user**:
   - Go to `/auth`
   - Click "Sign up"
   - Fill in the form
   - Submit

2. **Login with Google**:
   - Go to `/auth`
   - Click "Continue with Google"
   - Select your Google account

3. **Create a project**:
   - After login, you'll be on `/dashboard`
   - Click "New Project"
   - Fill in the project details
   - Submit

4. **Edit/Delete projects**:
   - In your dashboard, click "Edit" or "Delete" on any project card

### Building for Production

```bash
npm run build
```

---

## 🔐 Security Checklist

Before deploying to production:

- [ ] Firestore security rules published
- [ ] Authentication providers enabled (Google & Email/Password)
- [ ] Environment variables set in hosting platform
- [ ] `.env` file NOT committed to git
- [ ] Firebase budget alerts configured
- [ ] Firestore indexes created (Firebase Console will prompt)

---

## 🐛 Troubleshooting

### Common Issues:

1. **"Firebase not initialized" error**:
   - Ensure `.env` file exists in the project root
   - Restart the development server after creating `.env`

2. **Authentication popup blocked**:
   - Allow popups for your local development domain
   - Or use the redirect authentication method

3. **Firestore permission denied**:
   - Check that security rules are published
   - Verify the user is authenticated
   - Ensure userId matches in the document

4. **Index creation required**:
   - Firebase Console will show a link to create required indexes
   - Click the link and create the index
   - Wait a few minutes for indexing to complete

---

## 📊 Data Structure

### Project Document (`/projects/{projectId}`):

```typescript
{
  id: string;                    // Auto-generated by Firestore
  name: string;                  // Project name
  description: string;           // Project description
  techStack: string[];           // Array of technologies
  author: string;                // Author name
  githubUrl: string;             // GitHub repository URL
  stars: number;                 // GitHub stars count
  forks: number;                 // GitHub forks count
  lastUpdate: string;            // Last update date (ISO string)
  imageUrl?: string;             // Optional preview image (from GitHub API)
  userId: string;                // Owner's Firebase UID
  createdAt: Timestamp;          // Auto-generated creation time
  updatedAt: Timestamp;          // Auto-generated update time
}
```

---

## 🚀 Deployment

### Recommended Platforms:

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```
   - Add environment variables in Vercel dashboard

2. **Netlify**
   ```bash
   npm run build
   # Deploy the 'dist' folder
   ```
   - Add environment variables in Netlify dashboard

3. **Firebase Hosting**
   ```bash
   npm install -g firebase-tools
   firebase init hosting
   firebase deploy
   ```

### Environment Variables for Production:

Make sure to add all variables from `.env` to your hosting platform's environment configuration.

---

## 📝 Next Steps (Optional Enhancements)

- [ ] Add user profile management
- [ ] Implement project likes/favorites
- [ ] Add comments/discussions on projects
- [ ] Implement search with Algolia
- [ ] Add email verification for new users
- [ ] Implement password reset functionality
- [ ] Add project categories/tags filtering
- [ ] Implement real-time updates with Firestore listeners
- [ ] Add analytics dashboard
- [ ] Implement project collaboration features

---

## 📞 Support

If you encounter any issues:
1. Check the browser console for error messages
2. Review the Firebase Console logs
3. Verify all setup steps were completed
4. Check the `FIRESTORE_SECURITY_RULES.md` documentation

---

**Last Updated**: 2025-10-24  
**Firebase Project**: open-source-34b01  
**Version**: 1.0.0
