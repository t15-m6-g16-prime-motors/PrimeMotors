import express, { Application } from "express";

import { carRoutes, carRoutesFilter } from "./routes/cars.routes";

const app: Application = express();
app.use(express.json());

app.use("/cars", carRoutes);
app.use("/carsFilter", carRoutesFilter)

export default app;
