import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors/AppError";

const deleteUsersService = async (userId: number): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("car not found", 404);
  }

  await userRepository.remove(user);
};

export { deleteUsersService };
