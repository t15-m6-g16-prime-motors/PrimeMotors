import { Response, Request } from 'express';
import { getCommentsService } from '../services/comments/getComments.service';
import {
  TCommentRequest,
  TCommentUpdateRequest
} from '../interfaces/comments.interfaces';
import { updateCommentService } from '../services/comments/updateComments.service';
import { deleteCommentService } from '../services/comments/deleteComments.service';
import { getByIdCommentsService } from '../services/comments/getByIdComments.service';
import createCommentsServices from '../services/comments/createComments.service';

const createCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentData: TCommentRequest = req.body;
  const userId: number = res.locals.id;
  const carId: number = parseInt(req.params.carId);
  const newComment = await createCommentsServices(commentData, userId, carId);
  return res.status(201).json(newComment);
};

const getCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const comments= await getCommentsService();
  return res.status(200).json(comments);
};

const getByIdCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const comment = await getByIdCommentsService(id);
  return res.status(200).json(comment);
};

const updateCommentController = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const payload: TCommentUpdateRequest = req.body.data;
  const commentUpdated = await updateCommentService(id, payload);

  return res.status(201).json(commentUpdated);
};

const deleteCommentController = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  await deleteCommentService(id);
  return res.status(204).send();
};

export {
  createCommentController,
  getCommentsController,
  getByIdCommentsController,
  updateCommentController,
  deleteCommentController
};
