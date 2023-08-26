import { Router } from 'express';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';
import {
  createUserRequestSchema,
  updateUserRequestSchema
} from '../schemas/users.schemas';
import ensureEmailNotExistsMiddleware from '../middlewares/ensureEmailNotExistsMiddleware';
import ensureCpfNotExistsMiddleware from '../middlewares/ensureCpfNotExistsMiddleware';
import {
  createUsersController,
  deleteUsersController,
  getByIdUsersController,
  listUsersController,
  resetPasswordController,
  sendResetEmailPasswordController,
  updateUsersController
} from '../controllers/users.controller';
import { ensureAuthMiddleware } from '../middlewares/ensureAuthMiddleware';
import ensureUserIdExistsMiddleware from '../middlewares/ensureUserIdExists.middleware';

const userRoutes: Router = Router();

userRoutes.post(
  '',
  ensureDataIsValid(createUserRequestSchema),
  ensureEmailNotExistsMiddleware,
  ensureCpfNotExistsMiddleware,
  createUsersController
);

userRoutes.get('', ensureAuthMiddleware, listUsersController);

userRoutes.get(
  '/:id',
  ensureAuthMiddleware,
  // ensureIsOwnerMiddleware,
  ensureUserIdExistsMiddleware,
  getByIdUsersController
);

userRoutes.patch(
  '/:id',
  ensureAuthMiddleware,
  // ensureIsOwnerMiddleware, commented because it's a car patch, not user patch.
  ensureUserIdExistsMiddleware,
  ensureDataIsValid(updateUserRequestSchema),
  ensureEmailNotExistsMiddleware,
  updateUsersController
);

userRoutes.delete(
  '/:id',
  ensureAuthMiddleware,
  // ensureIsOwnerMiddleware, commented because it's a user delete, do not need car verification.
  ensureUserIdExistsMiddleware,
  deleteUsersController
);

userRoutes.post('/resetPassword', sendResetEmailPasswordController);
userRoutes.patch('/resetPassword/:token', resetPasswordController);

export default userRoutes;
