import { Request, Response, NextFunction } from "express";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";

const ensureEmailNotExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userEmail: string = request.body.email;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userDataQuery: User | null = await userRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  if (userDataQuery?.email === userEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export default ensureEmailNotExistsMiddleware;
