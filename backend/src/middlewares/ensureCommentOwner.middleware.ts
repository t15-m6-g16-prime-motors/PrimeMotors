import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Comment } from '../entities';
import { Repository } from 'typeorm';
import { AppError } from '../errors/AppError';

export const ensureCommentOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idUser = Number(res.locals.userId);
  const idComment = Number(req.params.id);
  const repository: Repository<Comment> = AppDataSource.getRepository(Comment);

  const comment = await repository
    .createQueryBuilder('comment')
    .where('comment.id = :id', { id: idComment })
    .leftJoinAndSelect('comment.user', 'user')
    .select(['comment', 'user.id'])
    .getOne();
  const idUserOwner = comment?.user.id;

  if (idUserOwner !== idUser) {
    throw new AppError('You dont`t have permissions', 401);
  }

  return next();
};
