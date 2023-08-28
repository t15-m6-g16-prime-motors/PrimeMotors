import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Comment } from '../../entities';
import { TCommentsResponse } from '../../interfaces/comments.interfaces';
import { commentsSchemaResponse } from '../../schemas/comments.schemas';

export const getCommentsService = async (): Promise<TCommentsResponse> => {
  const repository: Repository<Comment> = AppDataSource.getRepository(Comment);
  const comments = await repository.find();

  const commentsParse: TCommentsResponse =
    commentsSchemaResponse.parse(comments);

  return commentsParse;
};
