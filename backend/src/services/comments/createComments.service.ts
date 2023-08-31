import { Repository } from 'typeorm';
import {
  TCommentRequest,
  TCommentResponse
} from '../../interfaces/comments.interfaces';
import { AppDataSource } from '../../data-source';
import { commentSchemaResponse } from '../../schemas/comments.schemas';
import { Comment, Car, User } from '../../entities';

const createCommentsServices = async (
  commentData: TCommentRequest,
  userId: number,
  carId: number
) => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId
    }
  });


  const car: Car | null = await carRepository.findOne({
    where: {
      id: carId
    }
  });


  const comment: Comment = commentRepository.create({
    ...commentData,
    user: user!,
    car: car!
  });
  await commentRepository.save(comment);

  const returnComment: TCommentResponse = commentSchemaResponse.parse(comment);
  return returnComment;
};

export default createCommentsServices;
