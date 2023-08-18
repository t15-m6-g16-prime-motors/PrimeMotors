import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, User } from "../../entities";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const createUsersService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
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

  const returnUser: TUserResponse = userSchemaResponse.parse(user);

  return returnUser;
};
export default createUsersService;
