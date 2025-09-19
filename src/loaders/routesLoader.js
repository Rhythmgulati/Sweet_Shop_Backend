import { authRoutes } from "../routes/auth.routes";
import { inventoryRoutes } from "../routes/inventory.route";
import { sweetsRoutes } from "../routes/sweet.routes";

export const routesLoader = (app) => {
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/sweets",sweetsRoutes);
app.use("/api/v1/inventory",inventoryRoutes);
};