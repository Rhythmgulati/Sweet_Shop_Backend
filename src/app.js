import express from "express";
import dotenv from "dotenv";
import { middlewareLoader } from "./loaders/middlewareLoader";
import { routesLoader } from "./loaders/routesLoader";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

middlewareLoader(app);
routesLoader(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



