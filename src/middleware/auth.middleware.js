const jwt = require('jsonwebtoken');
const User = require('../model/User')

const adminAuthGuard = (req, res, next) => {
    const token = "abc";
    if (token === "abc") {
        next();
    } else {
        console.log("Unauthrized request")
        res.status(401).send("Unauthrized")
    }
}

const userAuthGuard = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }

        console.log("token :", token);

        if (!token) {
            return res.status(401).json({
                status: "failure",
                message: "Unauthorized: Token missing"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id); // ⚠️ fix this too

        if (!user || !user.isActive) {
            return res.status(401).json({
                status: "failure",
                message: "Unauthorized: User not found!"
            });
        }

        req.user = user;
        req.userId = user._id;

        next();

    } catch (error) {

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                code: "TOKEN_EXPIRED",
                message: "Session expired. Please login again."
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                code: "INVALID_TOKEN",
                message: "Invalid authentication token"
            });
        }

        return res.status(500).json({
            status: "failure",
            message: "Authentication failed!"
        });
    }
};

module.exports = {
    adminAuthGuard,
    userAuthGuard
}