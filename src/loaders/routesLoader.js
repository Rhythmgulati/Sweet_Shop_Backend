import { authRoutes } from "../routes/auth.routes.js";
import { categoryRoutes } from "../routes/categories.routes.js";
import { inventoryRoutes } from "../routes/inventory.routes.js";
import { sweetsRoutes } from "../routes/sweet.routes.js";

export const routesLoader = (app) => {
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/sweets",sweetsRoutes);
app.use("/api/v1/inventory",inventoryRoutes);
app.use("/api/v1/categories",categoryRoutes);



};