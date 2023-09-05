import { Repository } from 'typeorm';
import { Car, Picture } from '../../entities';
import { AppDataSource } from '../../data-source';
import {
  TCarResponse,
  TCarUpdateRequest
} from '../../interfaces/car.interfaces';
import { carResponseSchema } from '../../schemas/cars.schemas';

interface TCarPictures {
  image03?: string;
  image04?: string;
  image05?: string;
  image06?: string;
}

const updateCarService = async (carData: TCarUpdateRequest, carId: number) => {
  const { coverImage, image01, image02, extraImages, ...carInfo } = carData;

  const allImages: TCarPictures = Object.assign({}, ...(extraImages || []));

  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const pictureRepository: Repository<Picture> =
    AppDataSource.getRepository(Picture);

  const oldCarData: Car | null = await carRepository.findOneBy({
    id: carId
  });

  const newCarData: Car = carRepository.create({ ...oldCarData, ...carInfo });

  await carRepository.save(newCarData);

  const oldPicturesData: Picture | null = await pictureRepository.findOne({
    where: {
      car: {
        id: carId
      }
    }
  });

  const newPicuturesData: Picture = pictureRepository.create({
    ...oldPicturesData,
    coverImage: coverImage!,
    image01: image01!,
    image02: image02!,
    ...allImages
  });

  await pictureRepository.save(newPicuturesData);

  const updateCarResponseParse: TCarResponse = {
    ...newCarData,
    picture: {
      ...newPicuturesData
    }
  };
  const returnCar: TCarResponse = carResponseSchema.parse(
    updateCarResponseParse
  );

  return returnCar;
};

export default updateCarService;
