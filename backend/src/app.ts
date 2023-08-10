import express, { Application } from "express";



import { carRoutes } from "./routes/cars.routes";


const app: Application = express();
app.use(express.json());





app.use("/cars", carRoutes)


export default app;
