import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Comment } from '../entities';
import { Repository } from 'typeorm';
import { AppError } from '../errors/AppError';

export const ensureCommentNotExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = Number(req.params.id);
  const repository: Repository<Comment> = AppDataSource.getRepository(Comment);

  const comment = await repository
    .createQueryBuilder('comment')
    .where('comment.id = :id', { id })
    .select('comment.id')
    .getOne();
  if (!comment) {
    throw new AppError('comment not exist', 404);
  }
  return next();
};
