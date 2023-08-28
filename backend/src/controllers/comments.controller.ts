import { Response, Request } from 'express';
import { getCommentsService } from '../services/comments/getComments.service';
import { TCommentUpdateRequest } from '../interfaces/comments.interfaces';
import { updateCommentService } from '../services/comments/updateComments.service';
import { deleteCommentService } from '../services/comments/deleteComments.service';
import { getByIdCommentsService } from '../services/comments/getByIdComments.service';

const getCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cars = await getCommentsService();
  return res.status(200).json(cars);
};

const getByIdCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const car = await getByIdCommentsService(id);
  return res.status(200).json(car);
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
  getCommentsController,
  getByIdCommentsController,
  updateCommentController,
  deleteCommentController
};
