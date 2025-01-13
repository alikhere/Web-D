// Middleware for handling auth
const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../config")



function adminMiddleware(req, res, next) {
    // Check if the Authorization header is present
    const token = req.headers.authorization;

    // Split the token to extract the JWT
    const words = token.split(" ");
    const jwtToken = words[1];

    try {
        // Verify the token
        const decodedValue = jwt.verify(jwtToken, jwtSecret);

        // Check if the decoded token contains a valid username
        if (decodedValue.username) {
            return next(); // Proceed to the next middleware or route handler
        } else {
            return res.status(403).json({ message: "You are not authorized" });
        }
    } catch (e) {
    
        return res.status(400).json({ message: "Invalid token or authentication failed" });
    }
}




module.exports = adminMiddleware;