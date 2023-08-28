import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Comment } from '../../entities';
import { commentSchemaResponse } from '../../schemas/comments.schemas';
import { TCommentResponse } from '../../interfaces/comments.interfaces';

export const getByIdCommentsService = async (
  id: number
): Promise<TCommentResponse> => {
  const repository: Repository<Comment> = AppDataSource.getRepository(Comment);
  
  const comment = await repository
    .createQueryBuilder('comment')
    .where('comment.id = :id', { id })
    .leftJoinAndSelect('comment.user', 'user')
    .getOne();

  const commentParse: TCommentResponse = commentSchemaResponse.parse(comment);

  return commentParse;
};
