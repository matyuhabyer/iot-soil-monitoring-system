# Capstone Project - IoT Soil Monitoring System

A full-stack FERN (Firebase, Express, React, Node.js) application for IoT soil monitoring.

## 🏗️ Project Structure

```
Capstone/
├── backend/          # Express.js REST API server
│   ├── index.js      # Main server file
│   ├── middleware/   # Custom middleware (authentication, etc.)
│   └── package.json  # Backend dependencies
│
└── frontend/         # React.js frontend application
    ├── src/          # React source files
    ├── public/       # Static assets
    └── package.json  # Frontend dependencies
```

## 🚀 Tech Stack

- **Frontend**: React 19, Firebase Client SDK
- **Backend**: Express.js, Node.js, Firebase Admin SDK, dotenv
- **Database**: Firebase Firestore, Realtime Database
- **Authentication**: Firebase Authentication
- **Storage**: Firebase Cloud Storage
- **Environment Management**: dotenv (backend), React environment variables (frontend)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)
- **Firebase Account** - [Sign up here](https://firebase.google.com/)
- **Code Editor** (Recommended: VS Code) - [Download here](https://code.visualstudio.com/)

## ⚡ Quick Command Reference

**Copy-paste these commands to get started quickly:**

```bash
# 1. Clone and enter project
git clone <repository-url>
cd Capstone

# 2. Install backend dependencies
cd backend && npm install && cd ..

# 3. Install frontend dependencies
cd frontend && npm install && cd ..

# 4. Start backend (Terminal 1)
cd backend && npm start

# 5. Start frontend (Terminal 2 - new terminal)
cd frontend && npm start
```

**That's it!** The app will be running at:
- Backend: http://localhost:3000
- Frontend: http://localhost:4000

---

## 🚀 Quick Setup Guide

Follow these detailed steps to get the project up and running:

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Capstone
```

### Step 2: Install Dependencies

#### Backend Dependencies

Open a terminal and run:

```bash
cd backend
npm install
```

**What this installs:**
- `express` - Web framework for Node.js
- `firebase-admin` - Firebase Admin SDK for server-side operations
- `cors` - CORS middleware
- `dotenv` - Environment variable loader
- `firebase` - Firebase Client SDK (for compatibility)

**Expected output:**
```
added 267 packages, and audited 267 packages in Xs
```

#### Frontend Dependencies

In the same terminal or a new one, run:

```bash
cd ../frontend
npm install
```

**What this installs:**
- `react` & `react-dom` - React framework
- `firebase` - Firebase Client SDK
- `react-scripts` - Create React App tooling
- Testing libraries (`@testing-library/*`)
- `web-vitals` - Performance metrics

**Expected output:**
```
added 1384 packages, and audited 1384 packages in Xs
```

**Note**: Installation may take a few minutes depending on your internet connection.

### Step 3: Configure Environment Variables

The project includes `.env` files that are already configured with default values. You can customize them if needed.

#### Backend Configuration (`backend/.env`)

The file is already created with:
```env
PORT=3000
NODE_ENV=development
```

#### Frontend Configuration (`frontend/.env`)

The file is already created with:
```env
PORT=4000
REACT_APP_API_URL=http://localhost:3000
```

**Note**: If you change the backend port, update `REACT_APP_API_URL` in the frontend `.env` file accordingly.

### Step 4: Firebase Project Setup

#### 4.1 Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard
4. Enable the following services:
   - **Authentication** (Email/Password or your preferred method)
   - **Firestore Database**
   - **Realtime Database** (if needed)
   - **Storage** (if needed)

#### 4.2 Get Firebase Configuration

1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click on the web app icon (`</>`) to add a web app
4. Register your app and copy the Firebase configuration object

#### 4.3 Configure Frontend Firebase

1. Open `frontend/src/index.js`
2. Find the `firebaseConfig` object (around line 25)
3. Replace the values with your Firebase project credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};
```

#### 4.4 Setup Firebase Admin SDK (Backend)

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Click on the **"Service accounts"** tab
3. Click **"Generate new private key"**
4. A dialog will appear - click **"Generate key"**
5. A JSON file will be downloaded automatically
6. **Rename the downloaded file** to match your project:
   ```
   iotsoilmonitoringsystem-e1dcf-firebase-adminsdk-fbsvc-77f9294f0f.json
   ```
   (Or use your own naming convention, but update `backend/index.js` accordingly)
7. **Move the file** to the `backend/` directory:
   ```bash
   # If you're in the project root
   mv ~/Downloads/your-project-firebase-adminsdk-xxxxx.json backend/
   
   # Or manually copy the file to: Capstone/backend/
   ```

**⚠️ Security Warning**: 
- Never commit this service account key file to version control
- It's already in `.gitignore` to prevent accidental commits
- Keep this file secure and never share it publicly

### Step 5: Verify Setup

#### Test Backend

In a terminal, navigate to the backend directory and start the server:

```bash
cd backend
npm start
```

**Expected output:**
```
Server is running on port 3000
```

**Verify it's working:**
1. Open your browser and go to: `http://localhost:3000`
2. You should see:
```json
{"message":"Hello World","success":true}
```

**Alternative (with auto-restart):**
```bash
npm run dev
```
This requires `nodemon` to be installed globally: `npm install -g nodemon`

#### Test Frontend

Open a **new terminal window** (keep the backend running):

```bash
cd frontend
npm start
```

**Expected output:**
```
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:4000
  On Your Network:  http://192.168.x.x:4000
```

The React app should automatically open in your browser at `http://localhost:4000`.

**Note**: If the browser doesn't open automatically, manually navigate to `http://localhost:4000`

### Step 6: Verify Firebase Connection

1. The frontend should load without errors
2. Check the browser console for any Firebase initialization errors
3. Try making an authenticated request to verify Firebase Admin SDK is working

## 🐛 Troubleshooting

### Common Issues

#### Backend Issues

**Error: Cannot find module 'dotenv'**
```bash
cd backend
npm install
```

**Error: Cannot find module 'firebase-admin'**
```bash
cd backend
npm install firebase-admin
```

**Port already in use**
- Change the `PORT` in `backend/.env` to a different port (e.g., 3001)
- Update `REACT_APP_API_URL` in `frontend/.env` to match

**Firebase Admin SDK Error**
- Ensure the service account JSON file is in the `backend/` directory
- Check that the file name matches exactly: `iotsoilmonitoringsystem-e1dcf-firebase-adminsdk-fbsvc-77f9294f0f.json`
- Verify the JSON file is valid and not corrupted

#### Frontend Issues

**Error: Cannot find module 'firebase/app'**
```bash
cd frontend
npm install firebase
```

**Port 3000 already in use**
- The frontend is configured to use port 4000 by default
- If port 4000 is also in use, change `PORT` in `frontend/.env`

**CORS Errors**
- Ensure the backend is running on port 3000
- Check that `REACT_APP_API_URL` in `frontend/.env` matches your backend URL
- Verify CORS is enabled in `backend/index.js`

**Firebase Configuration Errors**
- Double-check your Firebase config values in `frontend/src/index.js`
- Ensure all required Firebase services are enabled in Firebase Console
- Check browser console for specific error messages

#### General Issues

**npm install fails**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Ensure you're using Node.js v14 or higher

**Environment variables not working**
- Restart the server after changing `.env` files
- For frontend, ensure variables start with `REACT_APP_` prefix
- Check that `.env` files are in the correct directories

**Both servers won't start**
- Ensure you have two separate terminal windows
- Check that ports 3000 and 4000 are not already in use
- Verify Node.js and npm are properly installed: `node --version` and `npm --version`

## 🔧 Installation (Detailed Reference)

This section provides a complete command-by-command installation guide.

### 1. Clone the Repository

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd Capstone

# Verify you're in the correct directory
ls
# You should see: backend/  frontend/  README.md  .gitignore
```

### 2. Install Backend Dependencies

```bash
# Navigate to backend directory
cd backend

# Install all backend dependencies
npm install

# Verify installation (optional)
npm list --depth=0
# You should see: cors, dotenv, express, firebase, firebase-admin

# Return to project root
cd ..
```

**What gets installed:**
- All packages listed in `backend/package.json`
- Creates `node_modules/` folder with dependencies
- Creates `package-lock.json` with exact versions

### 3. Install Frontend Dependencies

```bash
# Navigate to frontend directory
cd frontend

# Install all frontend dependencies
npm install

# Verify installation (optional)
npm list --depth=0
# You should see: react, react-dom, firebase, react-scripts, etc.

# Return to project root
cd ..
```

**What gets installed:**
- All packages listed in `frontend/package.json`
- Creates `node_modules/` folder with dependencies
- Creates `package-lock.json` with exact versions

### 4. Quick Installation (All at Once)

If you want to install both backend and frontend dependencies in sequence:

```bash
# From project root
cd backend && npm install && cd ../frontend && npm install && cd ..
```

Or use separate terminals for parallel installation.

### 4. Environment Setup

The project includes `.env` files for both backend and frontend. These files are already configured with default values.

#### Backend Environment Variables

The `backend/.env` file is already created with default configuration:
- `PORT=3000` - Server port (configurable)
- `NODE_ENV=development` - Environment mode

The backend uses the `dotenv` package to load these environment variables automatically.

#### Frontend Environment Variables

The `frontend/.env` file is already created with default configuration:
- `REACT_APP_API_URL=http://localhost:3000` - Backend API URL

**Note**: React requires the `REACT_APP_` prefix for environment variables to be accessible in the application.

#### Customizing Environment Variables

You can edit the `.env` files to customize:
- **Backend**: Change `PORT` if you want to run the server on a different port
- **Frontend**: Change `REACT_APP_API_URL` if your backend runs on a different URL

### 5. Firebase Setup

1. Place your Firebase service account key in the `backend/` directory:
   - File: `iotsoilmonitoringsystem-e1dcf-firebase-adminsdk-fbsvc-77f9294f0f.json`
   - ⚠️ **Important**: Never commit this file to version control

2. Update Firebase configuration in `frontend/src/index.js` with your Firebase project credentials.

## 📦 Dependencies

### Backend Dependencies

The backend uses the following npm packages:

| Package | Version | Purpose |
|---------|---------|---------|
| `cors` | ^2.8.5 | Enable Cross-Origin Resource Sharing (CORS) for API requests |
| `dotenv` | ^16.4.5 | Load environment variables from `.env` file |
| `express` | ^5.2.1 | Web framework for Node.js REST API |
| `firebase` | ^12.7.0 | Firebase Client SDK (for compatibility) |
| `firebase-admin` | ^13.6.0 | Firebase Admin SDK for server-side operations and token verification |

**Installation**: Run `npm install` in the `backend/` directory.

### Frontend Dependencies

The frontend uses the following npm packages:

| Package | Version | Purpose |
|---------|---------|---------|
| `@testing-library/dom` | ^10.4.1 | DOM testing utilities for React components |
| `@testing-library/jest-dom` | ^6.9.1 | Custom Jest matchers for DOM testing |
| `@testing-library/react` | ^16.3.1 | React testing utilities |
| `@testing-library/user-event` | ^13.5.0 | Simulate user interactions in tests |
| `firebase` | ^12.7.0 | Firebase Client SDK for authentication, Firestore, Storage, etc. |
| `react` | ^19.2.3 | React library for building user interfaces |
| `react-dom` | ^19.2.3 | React DOM renderer |
| `react-scripts` | ^5.0.1 | Create React App scripts and configuration |
| `web-vitals` | ^2.1.4 | Measure and report web performance metrics |

**Installation**: Run `npm install` in the `frontend/` directory.

### Development Dependencies

**Backend**:
- `nodemon` (optional) - Auto-restart server during development. Install globally: `npm install -g nodemon` or use `npm run dev` script.

**Frontend**:
- Testing libraries are included in dependencies (see above).
- ESLint configuration is included in `package.json`.

## 🏃 Running the Application

### Development Mode

You need to run both the backend and frontend servers in separate terminals.

#### Terminal 1 - Backend Server

```bash
cd backend
npm start
```

Or with auto-restart (requires nodemon):

```bash
npm run dev
```

The backend will run on the port specified in `backend/.env` (default: `http://localhost:3000`)

#### Terminal 2 - Frontend Server

```bash
cd frontend
npm start
```

The frontend will automatically open in your browser at `http://localhost:4000` (configured in `frontend/.env`).

### Production Build

#### Build Frontend

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `frontend/build/` directory.

## 📡 API Endpoints

### Public Endpoints

- `GET /` - Health check endpoint
- `POST /` - Test endpoint

### Protected Endpoints

Protected routes require authentication. Add the `validateUser` middleware:

```javascript
const { validateUser } = require("./middleware/auth");

app.get('/protected', validateUser, function(req, res) {
    // req.uid and req.user are available here
    res.json({ message: 'Protected data', userId: req.uid });
});
```

## 🔐 Authentication

The application uses Firebase Authentication:

- **Frontend**: Uses Firebase Client SDK for user authentication
- **Backend**: Uses Firebase Admin SDK to verify ID tokens

### Making Authenticated Requests

Use the `adminRequest` function from `frontend/src/index.js`:

```javascript
import { adminRequest } from './index';

adminRequest('api-endpoint', 'GET', null, (response) => {
    if (response) {
        console.log('Success:', response);
    } else {
        console.log('Error or unauthorized');
    }
});
```

## 📁 Project Structure Details

### Backend

- `index.js` - Main Express server file (loads environment variables with dotenv)
- `middleware/auth.js` - Authentication middleware for protected routes
- `.env` - Environment variables (port, node environment)
- `package.json` - Backend dependencies and scripts

### Frontend

- `src/index.js` - React entry point with Firebase initialization (uses environment variables)
- `src/App.js` - Main React component
- `.env` - Environment variables (API URL)
- `public/` - Static assets (HTML, images, etc.)

## 🛠️ Available Scripts

### Backend

- `npm start` - Start the server
- `npm run dev` - Start server with auto-restart (requires nodemon)

### Frontend

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🔒 Security Notes

- ⚠️ Never commit `.env` files or service account keys to version control
- Keep your Firebase service account key secure
- Use environment variables for sensitive configuration
- The `.gitignore` file is configured to exclude sensitive files

## 📝 Environment Variables

The project uses `.env` files for configuration. These files are already created and configured with default values.

### Backend (`backend/.env`)

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# CORS Configuration (optional)
# CORS_ORIGIN=http://localhost:3001
```

**How it works**: The backend uses the `dotenv` package to automatically load environment variables from `.env` when the server starts. The port is read from `process.env.PORT` with a fallback to 3000.

### Frontend (`frontend/.env`)

```env
# Frontend Server Port
PORT=4000

# API Configuration
REACT_APP_API_URL=http://localhost:3000
```

**How it works**: 
- React automatically loads environment variables prefixed with `REACT_APP_` from the `.env` file. The API URL is accessed via `process.env.REACT_APP_API_URL` in the code.
- The `PORT` variable sets the port for the React development server (default: 3000, configured: 4000).

### Changing Configuration

To change the server port or API URL, simply edit the respective `.env` file:
- **Backend port**: Edit `backend/.env` → Change `PORT=3000` to your desired port
- **API URL**: Edit `frontend/.env` → Change `REACT_APP_API_URL` to your backend URL

**Important**: After changing `.env` files, restart the respective server for changes to take effect.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

ISC

## 📞 Support

For issues and questions, please open an issue in the repository.

