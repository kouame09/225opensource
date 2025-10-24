# Firestore Security Rules

## Important: Configure these security rules in your Firebase Console

To secure your Firestore database, you need to apply the following security rules in the Firebase Console:

### How to Apply:
1. Go to Firebase Console (https://console.firebase.google.com/)
2. Select your project: `open-source-34b01`
3. Navigate to **Firestore Database** → **Rules**
4. Replace the existing rules with the rules below
5. Click **Publish**

---

## Security Rules Code

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper function to check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Helper function to check if user owns the resource
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    // Projects collection rules
    match /projects/{projectId} {
      
      // Anyone can read projects (for public browsing)
      allow read: if true;
      
      // Only authenticated users can create projects
      // The userId field must match the authenticated user's ID
      allow create: if isAuthenticated() 
                    && request.resource.data.userId == request.auth.uid
                    && request.resource.data.keys().hasAll(['name', 'description', 'author', 'githubUrl', 'techStack', 'stars', 'forks', 'lastUpdate', 'userId']);
      
      // Only the project owner can update their projects
      // Users cannot change the userId field
      allow update: if isOwner(resource.data.userId)
                    && request.resource.data.userId == resource.data.userId;
      
      // Only the project owner can delete their projects
      allow delete: if isOwner(resource.data.userId);
    }
    
    // User profiles collection (optional - for future use)
    match /users/{userId} {
      // Users can read their own profile
      allow read: if isOwner(userId);
      
      // Users can create/update their own profile
      allow create, update: if isOwner(userId);
      
      // Users can delete their own profile
      allow delete: if isOwner(userId);
    }
  }
}
```

---

## Rule Explanation

### Projects Collection (`/projects/{projectId}`):

1. **Read Access** (`allow read: if true`)
   - Everyone can read all projects (authenticated or not)
   - This enables public browsing of the project showcase

2. **Create Access** (`allow create`)
   - Only authenticated users can create projects
   - The `userId` field must match the authenticated user's ID
   - Required fields must be present: name, description, author, githubUrl, techStack, stars, forks, lastUpdate, userId

3. **Update Access** (`allow update`)
   - Only the project owner can update their projects
   - The `userId` field cannot be changed during updates
   - This prevents users from transferring project ownership

4. **Delete Access** (`allow delete`)
   - Only the project owner can delete their projects

### Security Features:

✅ **User Isolation**: Users can only modify their own projects
✅ **Public Reading**: Anyone can browse projects without authentication
✅ **Ownership Protection**: The `userId` field is immutable after creation
✅ **Field Validation**: Required fields are enforced on creation
✅ **Authentication Required**: Only authenticated users can create, update, or delete

---

## Testing Security Rules

After publishing the rules, test them using the Firebase Console's Rules Playground:

### Test Cases:

1. **Unauthenticated read** - Should succeed
2. **Unauthenticated create** - Should fail
3. **Authenticated create with correct userId** - Should succeed
4. **Authenticated create with different userId** - Should fail
5. **Update own project** - Should succeed
6. **Update someone else's project** - Should fail
7. **Delete own project** - Should succeed
8. **Delete someone else's project** - Should fail

---

## Additional Recommendations

### 1. Enable App Check (Optional but Recommended)
App Check helps protect your backend resources from abuse. Enable it in Firebase Console:
- Go to **Build** → **App Check**
- Register your web app
- Add the App Check SDK to your project

### 2. Set up Firestore Indexes
For better query performance, create indexes for:
- `userId` + `updatedAt` (descending) - Used in `getUserProjects()`
- `updatedAt` (descending) - Used in `getAllProjects()`

The Firebase Console will prompt you to create these indexes when you first run the queries.

### 3. Monitor Usage
- Set up budget alerts in Firebase Console
- Monitor read/write operations
- Review security rule violations in the Firebase Console logs

---

## Environment Variables Security

Make sure to:
1. **Never commit** the `.env` file to version control
2. The `.gitignore` file should include `.env`
3. For production deployment, set environment variables in your hosting platform (Vercel, Netlify, etc.)
4. Rotate API keys if they are accidentally exposed

---

## Firebase Configuration Checklist

- [ ] Security rules published
- [ ] Firestore indexes created
- [ ] Authentication providers enabled (Google, Email/Password)
- [ ] `.env` file created locally
- [ ] `.env` added to `.gitignore`
- [ ] Environment variables configured in hosting platform
- [ ] App Check enabled (optional)
- [ ] Budget alerts configured

---

Last Updated: 2025-10-24
