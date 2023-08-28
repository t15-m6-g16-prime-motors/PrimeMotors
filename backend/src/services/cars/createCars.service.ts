import { Repository } from 'typeorm';
import { Car, Picture, User } from '../../entities';
import { AppDataSource } from '../../data-source';
import {
  TCarResponse,
  TCreateCarRequest
} from '../../interfaces/car.interfaces';
import { carResponseSchema } from '../../schemas/cars.schemas';

interface TCarPictures {
  image03: string;
  image04: string;
  image05: string;
  image06: string;
}

const createCarsService = async (
  carData: TCreateCarRequest,
  userId: number
) => {
  const { coverImage, image01, image02, extraImages, ...carFields } = carData;

  const allImages: TCarPictures = Object.assign({}, ...extraImages);
  console.log(allImages);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const pictureRepository: Repository<Picture> =
    AppDataSource.getRepository(Picture);

  const user: User | null = await userRepository.findOneBy({
    id: userId
  });

  const car: Car = carRepository.create({ ...carFields, user: user! });
  await carRepository.save(car);

  const picture: Picture = pictureRepository.create({
    coverImage,
    image01,
    image02,
    ...allImages,
    car
  });

  await pictureRepository.save(picture);
  
  const createCarResponseParse: TCarResponse = {
    ...car,
    picture: {
      ...picture
    }
  };

  const returnCar = carResponseSchema.parse(createCarResponseParse);

  return returnCar;
};

export default createCarsService;
