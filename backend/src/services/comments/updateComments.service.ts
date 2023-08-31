import { Repository } from 'typeorm';

import { AppDataSource } from '../../data-source';
import { commentSchemaUpdateResponse } from '../../schemas/comments.schemas';
import { Comment } from '../../entities';
import {
  TCommentUpdateRequest,
  TCommentUpdateResponse
} from '../../interfaces/comments.interfaces';

export const updateCommentService = async (
  id: number,
  payload: TCommentUpdateRequest
): Promise<TCommentUpdateResponse> => {
  const repository: Repository<Comment> = AppDataSource.getRepository(Comment);
  const comment = await repository.findOne({ where: { id } });

  const newComment = repository.create({
    ...comment,
    ...payload
  });

  await repository.save(newComment);
  const returnNewComment: TCommentUpdateResponse =
    commentSchemaUpdateResponse.parse(newComment);

  return returnNewComment;
};
