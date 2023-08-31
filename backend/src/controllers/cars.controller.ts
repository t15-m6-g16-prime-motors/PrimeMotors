import { Response, Request } from 'express';
import { listCarsWithFiltersService } from '../services/cars/listCarsQuery.service';
import {
  TCarResponse,
  TCarUpdateRequest,
  TCreateCarRequest,
  TSetToNullCarPictureRequest
} from '../interfaces/car.interfaces';
import listCarsServices from '../services/cars/listCars.service';
import { getByIdCarsService } from '../services/cars/getByIdCars.service';
import deleteCarService from '../services/cars/deleteCars.service';
import createCarsService from '../services/cars/createCars.service';
import updateCarService from '../services/cars/updateCars.service';
import setPictureToNullService from '../services/pictures/deletePicture.service';

const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carData: TCreateCarRequest = req.body;
  const userId: number = res.locals.userId;
  const newCar = await createCarsService(carData, userId);
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
  const carData: TCarUpdateRequest = req.body;
  const carId = Number(req.params.id);

  const newCarData = await updateCarService(carData, carId);

  return res.json(newCarData);
};

const deleteCarController = async (req: Request, res: Response) => {
  const carId = Number(req.params.id);
  await deleteCarService(carId);
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

const deletePictureController = async (req: Request, res: Response) => {
  const picsId = Number(req.params.picId);
  const picData: TSetToNullCarPictureRequest = req.body;
  const patchDeletePictures = await setPictureToNullService(picData, picsId);
  return res.status(200).json(patchDeletePictures);
};

export {
  createCarController,
  listCarsController,
  getByIdCarsController,
  updateCarController,
  deleteCarController,
  listCarsWithFiltersController,
  deletePictureController
};
