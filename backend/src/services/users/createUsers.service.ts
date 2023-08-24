import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, User } from "../../entities";
import { TCreateUserResponse, TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { createUserSchemaResponse, userSchemaResponse } from "../../schemas/users.schemas";

const createUsersService = async (
  userData: TUserRequest
): Promise<TCreateUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);
  const { address, ...userFields} = userData;

  const user: User = userRepository.create(userFields);
  await userRepository.save(user);

  const createdAddress = addressRepository.create({
    ...address,
    user: user,
  });
  await addressRepository.save(createdAddress);

  user.address = createdAddress;

  const returnUser: TCreateUserResponse = createUserSchemaResponse.parse(user);

  return returnUser;
};
export default createUsersService;
