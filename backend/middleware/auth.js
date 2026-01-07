// ============================================
// AUTHENTICATION MIDDLEWARE
// ============================================

// Import Firebase Admin instance
const admin = require("firebase-admin");

/**
 * Authentication middleware to verify Firebase ID tokens
 * Extracts and validates the Bearer token from Authorization header
 * Adds user information to the request object if token is valid
 * 
 * Usage: Add as middleware to protected routes
 * Example: app.get('/protected', validateUser, function(req, res) { ... })
 * 
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 * @returns {void} Calls next() if authenticated, or sends 401 response if not
 */
const validateUser = async (req, res, next) => {
    // Extract authorization token from request headers
    let token = req.headers["authorization"];
    
    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    
    // Verify token format (must start with "Bearer ")
    if (!token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: Invalid token format" });
    }
    
    // Extract the actual token by removing "Bearer " prefix and trimming whitespace
    token = token.slice(7).trimStart();
    
    try {
        // Verify the Firebase ID token with Firebase Admin SDK
        // This validates the token signature and checks if it's expired
        const decodedToken = await admin.auth().verifyIdToken(token);
        
        // Attach user information to request object for use in route handlers
        req.uid = decodedToken.uid;        // User's unique ID
        req.user = decodedToken;            // Full decoded token with user info
        
        // Call next middleware/route handler
        next();
    } catch (error) {
        // Token is invalid, expired, or verification failed
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = { validateUser };

