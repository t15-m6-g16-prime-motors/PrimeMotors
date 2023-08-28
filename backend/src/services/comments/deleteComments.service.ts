import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Comment } from '../../entities';

export const deleteCommentService = async (id: number) => {
  const repository: Repository<Comment> = AppDataSource.getRepository(Comment);
  const comments = await repository.findOne({ where: { id } });

  await repository.remove(comments!);
};
