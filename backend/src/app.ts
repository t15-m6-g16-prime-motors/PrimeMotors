import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express";
import cors from "cors";
import { carRoutes, carRoutesFilter } from "./routes/cars.routes";
import { loginRoutes } from "./routes/login.routes";
import userRoutes from "./routes/users.routes";
import handleErrors from "./errors/handleErrors";

const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.VITE_URL,
  })
);

app.use("/cars", carRoutes);
app.use("/carsFilter", carRoutesFilter);
app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.use(handleErrors)

export default app;
