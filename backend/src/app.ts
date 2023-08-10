import express, { Application } from "express";
import { carsRoutes } from "./routes/cars.routes";

const app: Application = express();
app.use(express.json());



app.use("/cars", carsRoutes)

export default app;
