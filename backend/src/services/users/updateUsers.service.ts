import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import {
  TUserUpdateRequest,
  TUserUpdateResponse,
} from '../../interfaces/user.interfaces';
import { Address, User } from '../../entities';
import { updateUserResponseSchema } from '../../schemas/users.schemas';

const updateUsersService = async (
  userId: number,
  userData: TUserUpdateRequest
): Promise<TUserUpdateResponse> => {
  const { address, ...restUserInfo } = userData;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (restUserInfo) {
  }

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
    ...restUserInfo,
  });

  await userRepository.save(newUserData);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const newAddressData: Address | null = addressRepository.create({
    ...oldUserData.address,
    ...address,
  });

  await addressRepository.save(newAddressData);

  const returnUser: TUserUpdateResponse =
    updateUserResponseSchema.parse(newUserData);

  return returnUser;
};

export default updateUsersService;
