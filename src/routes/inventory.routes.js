import express from "express";
import { addInventoryController } from "../controllers/inventory.contoller.js";
import { isadmin } from "../middlewares/admin.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/:id/purchase", authMiddleware,addInventoryController);
router.post("/:id/add", authMiddleware,isadmin, addInventoryController);

export {router as inventoryRoutes};