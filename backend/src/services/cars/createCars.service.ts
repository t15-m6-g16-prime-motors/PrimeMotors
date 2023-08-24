import { Repository } from "typeorm";
import { Car, Picture, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  TCarPictureRequest,
  TCarRequest,
  TCarResponse,
} from "../../interfaces/car.interfaces";
import { carSchemaResponse } from "../../schemas/cars.schemas";
import { AppError } from "../../errors/AppError";

const createCarsServices = async (
  carData: TCarPictureRequest,
  userId: number
): Promise<TCarResponse> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const pictureRepository: Repository<Picture> =
    AppDataSource.getRepository(Picture);
  const { pictures, ...carFields } = carData;

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 409);
  }

  const car = carRepository.create({ ...carFields, user });
  await carRepository.save(car);

  const picture = pictureRepository.create({ ...pictures });
  await pictureRepository.save(picture);

  const returnCar: TCarResponse = carSchemaResponse.parse(car);
  return returnCar;
};

export default createCarsServices;
