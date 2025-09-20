import express from "express";
import { registerController , loginController} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login",loginController);
router.post("/register",registerController);

export {router as authRoutes};