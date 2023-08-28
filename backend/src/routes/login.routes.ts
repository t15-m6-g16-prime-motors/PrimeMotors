import { Router } from 'express';
import { loginController } from '../controllers/login.controller';
import { loginSchema } from '../schemas/login.schemas';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';

export const loginRoutes: Router = Router();
loginRoutes.post('', ensureDataIsValid(loginSchema), loginController);
