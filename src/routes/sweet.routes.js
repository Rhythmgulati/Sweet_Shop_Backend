import express from "express";
import { isadmin } from "../middlewares/admin.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { create, getAll, update, remove , search} from "../controllers/sweets.controller.js";

const router = express.Router();

router.post("/",authMiddleware,isadmin, create);
router.get("/", getAll);
router.get("/search", search);
router.put("/:id",authMiddleware,isadmin, update);
router.delete("/:id",authMiddleware,isadmin, remove);


export {router as sweetsRoutes};