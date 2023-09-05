import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import {
  TUserUpdateRequest,
  TUserUpdateResponse
} from '../../interfaces/user.interfaces';
import { Address, User } from '../../entities';
import { updateUserResponseSchema } from '../../schemas/users.schemas';

const updateUsersService = async (
  userData: TUserUpdateRequest,
  userId: number
): Promise<TUserUpdateResponse> => {
  const { address, ...userInfo } = userData;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  if (address) {
    const oldAddress: Address | null = await addressRepository.findOne({
      where: {
        user: {
          id: userId
        }
      }
    });
    const newAddress: Address = addressRepository.create({
      ...oldAddress,
      ...address
    });

    await addressRepository.save(newAddress);
  }

  const oldUserData: User | null = await userRepository.findOne({
    where: {
      id: userId
    },
    relations: {
      address: true
    }
  });

  const userNewInfos: User = userRepository.create({
    ...oldUserData,
    ...userInfo
  });

  const updatedUser: User = await userRepository.save(userNewInfos);

  const returnUser: TUserUpdateResponse =
    updateUserResponseSchema.parse(updatedUser);

  return returnUser;
};

export default updateUsersService;
