// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Firebase imports - using modular v9+ SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Initialize React root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Firebase configuration object
// Contains all necessary credentials to connect to your Firebase project
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEb847brh-JozcyRInp2kl0MjXXX_gz-g",
  authDomain: "iotsoilmonitoringsystem-e1dcf.firebaseapp.com",
  projectId: "iotsoilmonitoringsystem-e1dcf",
  storageBucket: "iotsoilmonitoringsystem-e1dcf.firebasestorage.app",
  messagingSenderId: "598842506024",
  appId: "1:598842506024:web:dca1f26f19a8d6c2506e1d",
  measurementId: "G-ZNERNGKRCZ"
};

// Initialize Firebase app and services
// https://firebase.google.com/docs/web/setup#available-libraries
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);      // Google Analytics for Firebase
const auth = getAuth(app);                // Firebase Authentication
const db = getFirestore(app);             // Cloud Firestore database
const storage = getStorage(app);          // Cloud Storage for files
const database = getDatabase(app);        // Realtime Database

// Export Firebase services for use in other components
export { auth, db, storage, database, analytics };

// Backend API base URL
// Get API URL from environment variable or default to localhost:4000
export var url = process.env.REACT_APP_API_URL || "http://localhost:4000";

/**
 * Makes an unauthenticated HTTP request to the backend API
 * @param {string} handler - The API endpoint path (e.g., "users", "data")
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {object|null} body - Request body data (null for GET requests)
 * @param {function} callback - Callback function that receives the response
 *                              Callback is called with response object on success, or null on error
 */
export function regularRequest(handler, method, body, callback){
  const http = new XMLHttpRequest();
  http.responseType = "json";  // Automatically parse JSON response
  
  // Open connection to the API endpoint
  http.open(method, url + "/" + handler, true);

  // Set Content-Type header if request has a body
  if(body != null){
    http.setRequestHeader("Content-Type", "application/json");
  }

  // Handle successful response
  http.onload = function(){
    callback(http.response);
  };
  
  // Handle network errors
  http.onerror = function(){
    callback(null);
  };
  
  // Send the request with body data (null for GET requests)
  http.send(JSON.stringify(body));
}

/**
 * Makes an authenticated HTTP request to the backend API
 * Requires the user to be logged in with Firebase Authentication
 * Automatically includes the Firebase ID token in the Authorization header
 * 
 * @param {string} handler - The API endpoint path (e.g., "users", "data")
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {object|null} body - Request body data (null for GET requests)
 * @param {function} callback - Callback function that receives the response
 *                              Callback is called with response object on success, or null on error
 */
export function adminRequest(handler, method, body, callback){
  // Check if user is authenticated
  const currentUser = auth.currentUser;
  
  // Return early if no user is logged in
  if (!currentUser) {
    callback(null);
    return;
  }

  // Get Firebase ID token for authentication
  currentUser.getIdToken().then(function(token){
    const http = new XMLHttpRequest();
    http.responseType = "json";  // Automatically parse JSON response
    
    // Open connection to the API endpoint
    http.open(method, url + "/" + handler, true);

    // Set Content-Type header if request has a body
    if(body != null){
      http.setRequestHeader("Content-Type", "application/json");
    }
    
    // Set Authorization header with Bearer token for backend validation
    http.setRequestHeader("Authorization", "Bearer " + token);
    
    // Handle successful response
    http.onload = function(){
      callback(http.response);
    };
    
    // Handle network errors
    http.onerror = function(){
      callback(null);
    };
    
    // Send the request with body data (null for GET requests)
    http.send(JSON.stringify(body));
  }).catch(function(error){
    // Handle token retrieval errors (e.g., token expired, user logged out)
    callback(null);
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
