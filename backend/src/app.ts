import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes';
import handleErrors from './errors/handleErrors';
import { carRoutes } from './routes/cars.routes';
import { loginRoutes } from './routes/login.routes';
import { commentRoutes } from './routes/comments.routes';
import { picturesRoutes } from './routes/pictures.routes';

const app: Application = express();
app.use(express.json());

app.use(
  cors()
);

app.use('/cars', carRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/pictures', picturesRoutes)

app.use(handleErrors);

export default app;
