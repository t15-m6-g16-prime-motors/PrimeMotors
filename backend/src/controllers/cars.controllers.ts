import { Request, Response } from "express";
import { TCarRequest } from "../interfaces/cars.interfaces";
import createCarsServices from "../services/cars/createCars.services";
import listCarsServices from "../services/cars/listCars.services";

const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carData: TCarRequest = req.body;
  const newCar = await createCarsServices(carData);
  return res.status(201).json(newCar);
};

const listCarsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cars = await listCarsServices();
  return res.status(200).json(cars);
};

export { createCarController, listCarsController };
