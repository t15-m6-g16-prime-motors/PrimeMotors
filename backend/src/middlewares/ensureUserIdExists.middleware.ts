import { Request, Response, NextFunction } from "express";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";

const ensureUserIdExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId: number = Number(request.params.id);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userDataQuery: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (userDataQuery?.id !== userId) {
    throw new AppError("User not found", 404);
  }
  return next();
};

export default ensureUserIdExistsMiddleware;
