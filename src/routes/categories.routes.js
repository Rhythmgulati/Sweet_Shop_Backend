import express from 'express';
import { addCategory, getAllCategories } from '../controllers/categories.controller.js';
import { isadmin } from '../middlewares/admin.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getAllCategories);
router.post('/', authMiddleware, isadmin, addCategory);

export { router as categoryRoutes};