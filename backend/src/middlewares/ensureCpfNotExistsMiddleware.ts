import { Request, Response, NextFunction } from "express";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";

const ensureCpfNotExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userCpf: string = request.body.cpf;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userDataQuery: User | null = await userRepository.findOne({
    where: {
      cpf: userCpf,
    },
  });

  if (userDataQuery?.cpf === userCpf) {
    throw new AppError("cpf already exists", 409);
  }

  return next();
};

export default ensureCpfNotExistsMiddleware;
