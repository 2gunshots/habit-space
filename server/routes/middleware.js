import { JWT_SECRET } from "./config.js";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log("authHeader: ", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).send("Access denied. No token provided");
    }

    const token = authHeader.split(" ")[1];
    // console.log("token: ", token);
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).send("Invalid or expired token");
    }
};
