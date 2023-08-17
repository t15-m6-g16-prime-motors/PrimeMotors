import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const createUsersService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);
  await userRepository.save(user);

  const returnUser: TUserResponse = userSchemaResponse.parse(user);

  return returnUser;
};
export default createUsersService;
