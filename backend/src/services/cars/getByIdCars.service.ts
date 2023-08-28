import { Car } from '../../entities';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { carResponseSchema } from '../../schemas/cars.schemas';

const getByIdCarsService = async (idCar: number) => {
  const repository: Repository<Car> = AppDataSource.getRepository(Car);
  const car = await repository
    .createQueryBuilder('car')
    .where('car.id = :id', { id: idCar })
    // .leftJoinAndSelect("car.user", "user")
    // .leftJoinAndSelect("car.comment", "comment")
    .leftJoinAndSelect("car.picture", "picture")
    .getOne();

  const schemaCar = carResponseSchema.parse(car); // o carResponseSchema do parse nao inclui comentários e usuário dono. Quando descomentar as linhas do user e comment, criar um schema adequado e não modificá-lo, pois é usado em outros lugares, pra não ter erro de tipo.

  return schemaCar;
};

export { getByIdCarsService };
