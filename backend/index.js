// Load environment variables from .env file
require('dotenv').config();

// Express.js framework for building the REST API server
const express = require('express');
// CORS (Cross-Origin Resource Sharing) middleware to allow frontend requests
const cors = require('cors');
// Firebase Admin SDK for server-side Firebase operations
const admin = require("firebase-admin");
// Import authentication middleware
const { validateUser } = require("./middleware/auth");

const app = express();

// ============================================
// MIDDLEWARE CONFIGURATION
// ============================================
// Enable CORS for all routes - allows frontend to make requests from different origin
app.use(cors());
// Parse incoming JSON payloads in request body
app.use(express.json());
// Parse incoming URL-encoded payloads (form data)
app.use(express.urlencoded({ extended: true }));

// ============================================
// API ROUTES
// ============================================

/**
 * GET endpoint - Root route
 * Returns a simple hello world message
 * @route GET /
 * @returns {object} JSON response with message and success status
 */
app.get('/', function(req, res) {
    return res.json({
        message: 'Hello World',
        success: true
    });
});

/**
 * POST endpoint - Root route
 * Returns a simple hello world message
 * @route POST /
 * @returns {object} JSON response with message and success status
 */
app.post('/', function(req, res) {
    return res.json({
        message: 'Hello World',
        success: true
    });
});

// ============================================
// SERVER INITIALIZATION
// ============================================
// Get port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the Express server
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});

// ============================================
// FIREBASE ADMIN SDK SETUP
// ============================================
// Load Firebase service account credentials
// This file contains private keys for server-side Firebase operations
var serviceAccount = require("./iotsoilmonitoringsystem-e1dcf-firebase-adminsdk-fbsvc-77f9294f0f.json");

// Initialize Firebase Admin with service account credentials
// Must be initialized before using admin.auth() methods (used in validateUser middleware)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

