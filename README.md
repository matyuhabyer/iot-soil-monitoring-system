# IoT Soil Monitoring System - Capstone Project

A full-stack web application for monitoring soil conditions in real-time, built with React, Express.js, and Firebase. This system provides role-based access control for operators, managers, and administrators to monitor and manage soil sensor data.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Features](#features)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

The IoT Soil Monitoring System is designed for **Luntiang Republika Ecofarm** to monitor Thai Basil soil conditions. The system provides:

- Real-time soil monitoring dashboard
- Role-based access control (Operator, Manager, Admin)
- System alerts and notifications
- Historical data analysis
- Advisory and recommendations
- System administration panel

## 🚀 Tech Stack

### Frontend
- **React 19.2.3** - UI library
- **React Router DOM 7.12.0** - Client-side routing
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **Lucide React 0.562.0** - Icon library
- **Firebase 12.7.0** - Authentication, Firestore, Storage, Realtime Database

### Backend
- **Node.js** - Runtime environment
- **Express.js 5.2.1** - Web framework
- **Firebase Admin SDK 13.6.0** - Server-side Firebase operations
- **CORS 2.8.5** - Cross-Origin Resource Sharing
- **dotenv 16.4.5** - Environment variable management

### Development Tools
- **React Scripts 5.0.1** - Build tooling
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.23** - CSS vendor prefixing
- **Testing Library** - Component testing utilities

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (v14.0.0 or higher)
   - Download: [https://nodejs.org/](https://nodejs.org/)
   - Verify installation: `node --version`
   - Recommended: v18.x LTS or higher

2. **npm** (v6.0.0 or higher)
   - Comes bundled with Node.js
   - Verify installation: `npm --version`

3. **Git** (for version control)
   - Download: [https://git-scm.com/](https://git-scm.com/)
   - Verify installation: `git --version`

4. **Firebase Account**
   - Sign up: [https://firebase.google.com/](https://firebase.google.com/)
   - Required for authentication and database services

5. **Code Editor** (Recommended: VS Code)
   - Download: [https://code.visualstudio.com/](https://code.visualstudio.com/)

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 500MB free space
- **Internet Connection**: Required for npm package installation and Firebase services

## 📁 Project Structure

```
Capstone/
├── backend/                          # Express.js REST API Server
│   ├── index.js                      # Main server file
│   ├── package.json                  # Backend dependencies
│   ├── package-lock.json             # Locked dependency versions
│   ├── .env                          # Environment variables (create this)
│   ├── middleware/                   # Custom middleware
│   │   └── auth.js                   # Authentication middleware
│   └── iotsoilmonitoringsystem-*.json # Firebase Admin SDK key (keep secure!)
│
├── frontend/                         # React.js Frontend Application
│   ├── src/                          # Source code
│   │   ├── components/              # Reusable React components
│   │   │   ├── Header.js            # Main header component
│   │   │   ├── Navigation.js        # Sidebar navigation
│   │   │   ├── RoleBadge.js         # User role badge
│   │   │   ├── Button.js            # Button component
│   │   │   └── DropdownMenu.js      # Dropdown menu component
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.js              # Home page
│   │   │   └── About.js             # About page
│   │   ├── utils/                   # Utility functions
│   │   │   ├── roles.js             # Role definitions
│   │   │   └── permissions.js       # Permission system
│   │   ├── App.js                   # Main App component
│   │   ├── index.js                 # React entry point
│   │   └── index.css                # Global styles with Tailwind
│   ├── public/                      # Static assets
│   ├── package.json                 # Frontend dependencies
│   ├── package-lock.json            # Locked dependency versions
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   └── postcss.config.js            # PostCSS configuration
│
└── README.md                         # This file
```

## 🔧 Installation

Follow these steps to set up the project on your local machine.

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd Capstone
```

### Step 2: Install Backend Dependencies

Navigate to the backend directory and install all required packages:

```bash
cd backend
npm install
```

**What this installs:**
- `express` - Web framework for building REST API
- `cors` - Enable Cross-Origin Resource Sharing
- `dotenv` - Load environment variables from .env file
- `firebase-admin` - Firebase Admin SDK for server-side operations
- `firebase` - Firebase Client SDK (for compatibility)

**Expected output:**
```
added 267 packages, and audited 267 packages in Xs
```

**Installation time:** Approximately 30-60 seconds (depending on internet speed)

### Step 3: Install Frontend Dependencies

Open a new terminal window (keep the backend terminal open) and navigate to the frontend directory:

```bash
cd frontend
npm install
```

**What this installs:**

**Production Dependencies:**
- `react` & `react-dom` - React framework
- `react-router-dom` - Client-side routing
- `firebase` - Firebase Client SDK
- `lucide-react` - Icon library
- `react-scripts` - Create React App tooling
- `web-vitals` - Performance metrics

**Development Dependencies:**
- `tailwindcss` - CSS framework
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixing
- `@testing-library/*` - Testing utilities

**Expected output:**
```
added 1392 packages, and audited 1392 packages in Xs
```

**Installation time:** Approximately 2-5 minutes (depending on internet speed)

### Step 4: Verify Installation

Check that all dependencies were installed correctly:

```bash
# In backend directory
cd backend
npm list --depth=0

# In frontend directory
cd frontend
npm list --depth=0
```

You should see all the packages listed without errors.

## ⚙️ Configuration

### Backend Configuration

#### 1. Create Environment File

Create a `.env` file in the `backend/` directory:

```bash
cd backend
touch .env  # On Windows: type nul > .env
```

#### 2. Add Environment Variables

Open `backend/.env` and add the following:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Optional: CORS Configuration
# CORS_ORIGIN=http://localhost:4000
```

**Note:** The backend will default to port 3000 if `PORT` is not specified.

#### 3. Firebase Admin SDK Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Navigate to **Project Settings** (gear icon) → **Service Accounts** tab
4. Click **"Generate new private key"**
5. Download the JSON file
6. Rename it to match your project (e.g., `iotsoilmonitoringsystem-e1dcf-firebase-adminsdk-fbsvc-77f9294f0f.json`)
7. Move the file to the `backend/` directory

**⚠️ Security Warning:**
- Never commit this file to version control
- Keep it secure and never share it publicly
- It's already in `.gitignore` to prevent accidental commits

### Frontend Configuration

#### 1. Create Environment File

Create a `.env` file in the `frontend/` directory:

```bash
cd frontend
touch .env  # On Windows: type nul > .env
```

#### 2. Add Environment Variables

Open `frontend/.env` and add the following:

```env
# Frontend Server Port
PORT=4000

# Backend API URL
REACT_APP_API_URL=http://localhost:3000
```

**Important Notes:**
- React requires the `REACT_APP_` prefix for environment variables
- Change `REACT_APP_API_URL` if your backend runs on a different port
- Restart the dev server after changing `.env` files

#### 3. Firebase Configuration

Open `frontend/src/index.js` and update the Firebase configuration:

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

**To get your Firebase config:**
1. Go to Firebase Console → Project Settings
2. Scroll to "Your apps" section
3. Click the web app icon (`</>`)
4. Copy the configuration object

## 🚀 Running the Application

You need to run both the backend and frontend servers simultaneously.

### Option 1: Using Two Terminal Windows (Recommended)

#### Terminal 1 - Backend Server

```bash
cd backend
npm start
```

**Expected output:**
```
Server is running on port 3000
```

**Verify it's working:**
- Open browser: `http://localhost:3000`
- You should see: `{"message":"Hello World","success":true}`

#### Terminal 2 - Frontend Server

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

The React app will automatically open in your browser at `http://localhost:4000`.

### Option 2: Using Development Mode (Backend)

For auto-restart on file changes, use:

```bash
cd backend
npm run dev
```

**Note:** This requires `nodemon` to be installed globally:
```bash
npm install -g nodemon
```

## 📜 Available Scripts

### Backend Scripts

Run these commands from the `backend/` directory:

| Command | Description |
|---------|-------------|
| `npm start` | Start the production server |
| `npm run dev` | Start server with auto-restart (requires nodemon) |
| `npm test` | Run tests (not configured yet) |

### Frontend Scripts

Run these commands from the `frontend/` directory:

| Command | Description |
|---------|-------------|
| `npm start` | Start development server (opens http://localhost:4000) |
| `npm run build` | Create production build in `build/` folder |
| `npm test` | Run test suite |
| `npm run eject` | Eject from Create React App (⚠️ irreversible) |

## 📦 Dependencies

### Backend Dependencies

All dependencies are listed in `backend/package.json`:

| Package | Version | Purpose |
|---------|---------|---------|
| **express** | ^5.2.1 | Web framework for Node.js REST API |
| **cors** | ^2.8.5 | Enable Cross-Origin Resource Sharing for API requests |
| **dotenv** | ^16.4.5 | Load environment variables from `.env` file |
| **firebase-admin** | ^13.6.0 | Firebase Admin SDK for server-side operations and token verification |
| **firebase** | ^12.7.0 | Firebase Client SDK (for compatibility) |

**Installation command:**
```bash
cd backend
npm install
```

### Frontend Dependencies

#### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **react** | ^19.2.3 | React library for building user interfaces |
| **react-dom** | ^19.2.3 | React DOM renderer |
| **react-router-dom** | ^7.12.0 | Client-side routing for React applications |
| **firebase** | ^12.7.0 | Firebase Client SDK for authentication, Firestore, Storage, etc. |
| **lucide-react** | ^0.562.0 | Icon library with React components |
| **react-scripts** | ^5.0.1 | Create React App scripts and configuration |
| **web-vitals** | ^2.1.4 | Measure and report web performance metrics |

#### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **tailwindcss** | ^3.4.19 | Utility-first CSS framework |
| **postcss** | ^8.5.6 | CSS processing tool |
| **autoprefixer** | ^10.4.23 | Automatically adds vendor prefixes to CSS |
| **@testing-library/react** | ^16.3.1 | React testing utilities |
| **@testing-library/jest-dom** | ^6.9.1 | Custom Jest matchers for DOM testing |
| **@testing-library/user-event** | ^13.5.0 | Simulate user interactions in tests |
| **@testing-library/dom** | ^10.4.1 | DOM testing utilities |

**Installation command:**
```bash
cd frontend
npm install
```

### Quick Installation (All at Once)

If you want to install both backend and frontend dependencies in sequence:

```bash
# From project root
cd backend && npm install && cd ../frontend && npm install && cd ..
```

## ✨ Features

### Authentication & Authorization

- **Firebase Authentication** - Secure user authentication
- **Role-Based Access Control** - Three user roles:
  - **Operator**: Basic monitoring and alerts
  - **Manager**: Operator permissions + historical data
  - **Admin**: Full system access including administration
- **Protected Routes** - Backend middleware for route protection
- **Token Verification** - Automatic token validation on API requests

### User Interface

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Built with Tailwind CSS
- **Icon System** - Lucide React icons throughout
- **Navigation** - Sidebar navigation with role-based menu items
- **Header** - User info, role badge, and logout functionality

### Components

- **Header** - Main application header with user account dropdown
- **Navigation** - Sidebar navigation with permission-based menu items
- **RoleBadge** - Visual role indicators (Operator, Manager, Admin)
- **DropdownMenu** - Reusable dropdown menu component
- **Button** - Reusable button component with variants

### Pages

- **Home** - Landing page
- **About** - About page
- Additional pages can be added in `frontend/src/pages/`

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Backend Issues

**Problem: `Cannot find module 'express'`**
```bash
cd backend
npm install
```

**Problem: `Port 3000 already in use`**
- Change `PORT` in `backend/.env` to a different port (e.g., 3001)
- Update `REACT_APP_API_URL` in `frontend/.env` to match

**Problem: `Firebase Admin SDK Error`**
- Ensure the service account JSON file is in `backend/` directory
- Check that the file name matches exactly
- Verify the JSON file is valid and not corrupted

**Problem: `Cannot find module 'dotenv'`**
```bash
cd backend
npm install dotenv
```

#### Frontend Issues

**Problem: `Cannot find module 'react'`**
```bash
cd frontend
npm install
```

**Problem: `Port 4000 already in use`**
- Change `PORT` in `frontend/.env` to a different port (e.g., 4001)

**Problem: `Tailwind CSS not working`**
- Verify `tailwind.config.js` exists
- Check `postcss.config.js` is configured correctly
- Ensure `@tailwind` directives are in `src/index.css`
- Restart the dev server

**Problem: `CORS Errors`**
- Ensure backend is running on port 3000
- Check `REACT_APP_API_URL` in `frontend/.env` matches backend URL
- Verify CORS is enabled in `backend/index.js`

**Problem: `Firebase Configuration Errors`**
- Double-check Firebase config values in `frontend/src/index.js`
- Ensure all required Firebase services are enabled in Firebase Console
- Check browser console for specific error messages

#### General Issues

**Problem: `npm install fails`**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json  # On Windows: rmdir /s node_modules

# Reinstall
npm install
```

**Problem: `Environment variables not working`**
- Restart the server after changing `.env` files
- For frontend, ensure variables start with `REACT_APP_` prefix
- Check that `.env` files are in the correct directories

**Problem: `Both servers won't start`**
- Ensure you have two separate terminal windows
- Check that ports 3000 and 4000 are not already in use
- Verify Node.js and npm are properly installed:
  ```bash
  node --version
  npm --version
  ```

**Problem: `Module not found errors`**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure you're in the correct directory (backend or frontend)

## 📝 Additional Notes

### Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload during development
2. **Environment Variables**: Always restart servers after changing `.env` files
3. **Firebase**: Keep your service account key secure and never commit it
4. **Ports**: Default ports are 3000 (backend) and 4000 (frontend)
5. **Build**: Run `npm run build` in frontend before deploying to production

### Security Best Practices

- ⚠️ Never commit `.env` files to version control
- ⚠️ Never commit Firebase service account keys
- ⚠️ Keep sensitive credentials secure
- ✅ Use environment variables for configuration
- ✅ Enable Firebase security rules in production

### Getting Help

If you encounter issues not covered here:

1. Check the browser console for errors
2. Check the terminal output for error messages
3. Verify all dependencies are installed correctly
4. Ensure all configuration files are set up properly
5. Check that Firebase services are enabled in Firebase Console

## 📄 License

ISC

## 👥 Contributors

- Your Name Here

## 📞 Support

For issues and questions, please open an issue in the repository or contact the development team.

---

**Last Updated:** January 2025
**Project Version:** 1.0.0
