import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { TUsersListResponse } from '../../interfaces/user.interfaces';
import { User } from '../../entities';
import { userListResponseSchema } from '../../schemas/users.schemas';

const listUsersService = async (): Promise<TUsersListResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: User[] = await userRepository.find({
    relations: {
      address: true
    }
  });

  const returnUsers: TUsersListResponse = userListResponseSchema.parse(users);

  return returnUsers;
};

export default listUsersService;
