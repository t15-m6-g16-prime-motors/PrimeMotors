import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import {
  TUserResponse,
  TUserUpdateRequest,
  TUserUpdateResponse,
} from '../../interfaces/user.interfaces';
import { User } from '../../entities';
import {
  updateUserResponseSchema,
  userSchemaResponse,
} from '../../schemas/users.schemas';

const updateUsersService = async (
  userId: number,
  userData: TUserUpdateRequest
): Promise<TUserUpdateResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
    },
  });

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(newUserData);
  console.log(newUserData);

  const returnUser: TUserUpdateResponse =
    updateUserResponseSchema.parse(newUserData);

  return returnUser;
};

export default updateUsersService;
