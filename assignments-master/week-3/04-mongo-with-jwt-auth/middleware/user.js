const {jwtSecret} = require("../config")

function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const deconded = jwt.verify(jwtToken,jwtSecret);
    if (decodedValue.username) {
        next();
    } else res.status(403).jos({
        message: "You are not authenticated"
    })
}

module.exports = userMiddleware;