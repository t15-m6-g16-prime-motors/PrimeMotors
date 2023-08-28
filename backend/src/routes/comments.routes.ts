import { Router } from 'express';
import {
  deleteCommentController,
  getByIdCommentsController,
  getCommentsController,
  updateCommentController
} from '../controllers/comments.controller';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';
import { commentSchemaUpdateRequest } from '../schemas/comments.schemas';

export const commentRoutes = Router();

commentRoutes.get('', getCommentsController);
commentRoutes.get('/:id', getByIdCommentsController);
commentRoutes.patch(
  '/:id',
  ensureDataIsValid(commentSchemaUpdateRequest),
  updateCommentController
);
commentRoutes.delete('/:id', deleteCommentController);
