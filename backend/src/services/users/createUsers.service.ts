import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Address, User } from '../../entities';
import {
  TCreateUserRequest,
  TCreateUserResponse
} from '../../interfaces/user.interfaces';
import { createUserResponseSchema } from '../../schemas/users.schemas';

const createUsersService = async (
  userData: TCreateUserRequest
): Promise<TCreateUserResponse> => {
  const { address, ...userFields } = userData;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const user: User = userRepository.create(userFields);
  await userRepository.save(user);

  const createdAddress = addressRepository.create({
    ...address,
    user: user
  });
  await addressRepository.save(createdAddress);

  user.address = createdAddress;

  const returnUser: TCreateUserResponse = createUserResponseSchema.parse(user);

  return returnUser;
};
export default createUsersService;
