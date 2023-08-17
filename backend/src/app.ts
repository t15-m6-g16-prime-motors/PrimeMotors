import express, { Application } from 'express';
import cors from 'cors';

import { carRoutes, carRoutesFilter } from './routes/cars.routes';
import { loginRoutes } from './routes/login.routes';

const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.VITE_URL,
  })
);

app.use('/cars', carRoutes);
app.use('/carsFilter', carRoutesFilter);
app.use('/login', loginRoutes);

export default app;
