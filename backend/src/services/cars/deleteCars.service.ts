import { AppDataSource } from '../../data-source';
import { Car } from '../../entities';
import { AppError } from '../../errors/AppError';

const deleteCarService = async (carId: number): Promise<void> => {
  const carRepository = AppDataSource.getRepository(Car);
  const car = await carRepository.findOneBy({ id: carId });

  if (!car) {
    throw new AppError('car not found', 404);
  }

  await carRepository.remove(car);
};

export default deleteCarService;
