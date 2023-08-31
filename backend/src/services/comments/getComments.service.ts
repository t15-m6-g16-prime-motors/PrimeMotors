import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Comment } from '../../entities';
import { TCommentsResponse } from '../../interfaces/comments.interfaces';
import { commentsSchemaResponse } from '../../schemas/comments.schemas';

export const getCommentsService = async (): Promise<TCommentsResponse> => {
  const repository: Repository<Comment> = AppDataSource.getRepository(Comment);
  const comments = await repository
    .createQueryBuilder('comment')
    .leftJoinAndSelect('comment.user', 'user')
    .leftJoinAndSelect('comment.car', 'car')
    .select(['comment', 'user.id', 'user.full_name', 'car.id' ])
    .getMany();

  const commentsParse: TCommentsResponse =
    commentsSchemaResponse.parse(comments);

  return commentsParse;
};
