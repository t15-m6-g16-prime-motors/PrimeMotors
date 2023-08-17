import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/user.interfaces";
import { User } from "../../entities";
import { userSchemaResponse } from "../../schemas/users.schemas";

const updateUsersService = async (
  userId: number,
  userData: TUserUpdateRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(newUserData);

  const returnUser: TUserResponse = userSchemaResponse.parse(newUserData);

  return returnUser;
};

export default updateUsersService;
