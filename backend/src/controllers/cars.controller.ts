import { TCarRequest, TCarResponse, TCarUpdate } from "../interfaces/car.interfaces";
import { deleteContactsService } from "../services/cars/deleteCars.service";
import { getByIdCarsService } from "../services/cars/getByIdCars.service";
import { updateCarsService } from "../services/cars/updateCars.service";
import { Response, Request } from "express";
import createCarsServices from "../services/cars/createCars.service";
import listCarsServices from "../services/cars/listCars.service";
import { listCarsWithFiltersService } from "../services/cars/listCarsQuery.service";

const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carData: TCarRequest = req.body;
  const  userId: number = res.locals.id;
  const newCar = await createCarsServices(carData, userId);
  return res.status(201).json(newCar);
};

const listCarsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cars = await listCarsServices();
  return res.status(200).json(cars);
};

const getByIdCarsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carId: number = Number(req.params.id);

  const car: TCarResponse = await getByIdCarsService(carId);

  return res.status(200).json(car);
};

const updateCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carData: TCarUpdate = req.body;
  const carId = Number(req.params.id);

  const newCarData = await updateCarsService(carData, carId);

  return res.json(newCarData);
};

const deleteCarController = async (req: Request, res: Response) => {
  const carId = Number(req.params.id);

  await deleteContactsService(carId);

  return res.status(204).send();
};

const listCarsWithFiltersController = async (req: Request, res: Response) => {
  try {
      const queryParams = req.query; 
      const cars = await listCarsWithFiltersService(queryParams);

      return res.status(200).json(cars);
      
  } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred' });
  }
};

export {
  createCarController,
  listCarsController,
  getByIdCarsController,
  updateCarController,
  deleteCarController,
  listCarsWithFiltersController
};
