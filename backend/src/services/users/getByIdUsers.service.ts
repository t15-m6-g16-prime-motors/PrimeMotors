import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { User } from "../../entities";
import { userSchemaResponse } from "../../schemas/users.schemas";

const getByIdUsersService = async (userId: number): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository
    .createQueryBuilder("user")
    .where("user.id = :id", { id: userId })
    .leftJoinAndSelect("user.address", "address")
    .leftJoinAndSelect("user.cars", "car")
    .getOne();
  console.log("console antes do parse", user);
  const returnUsers: TUserResponse = userSchemaResponse.parse(user);

  return returnUsers;
};

export default getByIdUsersService;

