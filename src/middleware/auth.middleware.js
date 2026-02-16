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
        console.log("token :", token)
        if (!token ) {
            res.status(401).send({status: "faliur", message: 'Unauthorized: Token missing'});
        }
        // 4️⃣ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user || !user.isActive) {
            res.status(401).send({status: "faliur", message: 'Unauthorized: User not found!'});
        }
        req.user = user;
        req.userId = user._id;
        next();
    } catch (error) {        
        // 🔥 Token expired
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                code: "TOKEN_EXPIRED",
                message: "Session expired. Please login again."
            });
        }

        // 🔥 Invalid token
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                code: "INVALID_TOKEN",
                message: "Invalid authentication token"
            });
        }

        res.status(500).send({status: "faliur", message: 'Authentication failed!'});
    }
}


module.exports = {
    adminAuthGuard,
    userAuthGuard
}