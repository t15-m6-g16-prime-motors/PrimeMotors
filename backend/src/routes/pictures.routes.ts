import { Router } from 'express';
import { deletePictureController } from '../controllers/cars.controller';
import { ensureAuthMiddleware } from '../middlewares/ensureAuthMiddleware';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';
import { setPictureToNullRequestSchema } from '../schemas/pictures.schemas';

export const picturesRoutes: Router = Router();

picturesRoutes.patch(
  '/:picId',
  ensureAuthMiddleware,
  ensureDataIsValid(setPictureToNullRequestSchema),
  deletePictureController
);
