import { AppDataSource } from "../../data-source";
import { Car } from "../../entities";


const listCarsWithFiltersService = async (queryParams: any) => {
    try {
        const carRepository = AppDataSource.getRepository(Car)
        let query = carRepository.createQueryBuilder('car');

        if (queryParams.brand) {
            query = query.andWhere('car.brand = :brand', { brand: queryParams.brand });
        }
        if (queryParams.model) {
            query = query.andWhere('car.model = :model', { model: queryParams.model });
        }
        if (queryParams.color) {
            query = query.andWhere('car.color = :color', { color: queryParams.color });
        }
        if (queryParams.year) {
            const yearAsNumber = parseInt(queryParams.year, 10);
            if (!isNaN(yearAsNumber)) {
                query = query.andWhere('car.year = :year', { year: yearAsNumber });
            }
        }

        const cars = await query.getMany();

        return cars;
        
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred');
    }
};

export { listCarsWithFiltersService }