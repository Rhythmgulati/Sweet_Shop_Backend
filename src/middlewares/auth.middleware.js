import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { asynchandler } from "../utils/asyncHandler.js";
dotenv.config();

export const authMiddleware = asynchandler((req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log(req.user);
        
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }   
});
