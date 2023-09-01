import { Router } from 'express';
import {
  createCommentController,
  deleteCommentController,
  getByIdCommentsController,
  getCommentsController,
  updateCommentController
} from '../controllers/comments.controller';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';
import {
  commentSchemaRequest,
  commentSchemaUpdateRequest
} from '../schemas/comments.schemas';
import { ensureAuthMiddleware } from '../middlewares/ensureAuthMiddleware';
import { ensureCommentNotExistsMiddleware } from '../middlewares/ensureCommentNotExists.middleware';
import { ensureCommentOwnerMiddleware } from '../middlewares/ensureCommentOwner.middleware';
import ensureCarIdMiddleware from '../middlewares/ensureCarIdExists.middleware';

export const commentRoutes = Router();

commentRoutes.post(
  '/:id',
  ensureAuthMiddleware,
  ensureDataIsValid(commentSchemaRequest),
  ensureCarIdMiddleware,
  createCommentController
);

commentRoutes.get('', getCommentsController);
commentRoutes.get(
  '/:id',
  
  ensureCommentNotExistsMiddleware,
  getByIdCommentsController
);
commentRoutes.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureDataIsValid(commentSchemaUpdateRequest),
  ensureCommentNotExistsMiddleware,
  ensureCommentOwnerMiddleware,
  updateCommentController
);
commentRoutes.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureCommentNotExistsMiddleware,
  ensureCommentOwnerMiddleware,
  deleteCommentController
);
