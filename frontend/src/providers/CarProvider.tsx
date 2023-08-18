/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, createContext, useEffect, useState } from 'react';
import { ICar, IDefaultProviderProps } from '../interfaces';
import { api, apiKenzieCars } from '../services/api';
import { ICreateCar } from '../components/Modal/CreateNewCar/createCar.schema';
import { AxiosResponse } from 'axios';
import { ICarByBrandFromKenzieAPI } from '../interfaces/cars.interfaces';

interface ICarContextValues {
  allCars: ICar[];
  carBrands: string[];
  carModels: string[];
  carColors: string[];
  carYears: string[];
  carFuelTypes: string[];
  carMinKm: number;
  carMaxKm: number;
  carMinPrice: number;
  carMaxPrice: number;
  setCarMinPrice: Dispatch<React.SetStateAction<number>>;
  setCarMaxPrice: Dispatch<React.SetStateAction<number>>;
  setCarMinKm: Dispatch<React.SetStateAction<number>>;
  setCarMaxKm: Dispatch<React.SetStateAction<number>>;
  setfilterCar: Dispatch<React.SetStateAction<string>>;
  filterCar: string;
  filteredCars: ICar[];
  setFilteredCars: Dispatch<React.SetStateAction<ICar[]>>;
  isFilterActive: boolean;
  setIsFilterActive: Dispatch<React.SetStateAction<boolean>>;
  handleCreateCar: (newCarData: ICreateCar) => Promise<void>;
  setModelsByBrandsFromApi: Dispatch<React.SetStateAction<Array<string>>>;
  modelsByBrandsFromApi: string[];
  getModelsCarsByBrandFromKenzieCars: (brand: string) => Promise<void>;
  getAllCarsBrandsFromKenzieCars: () => Promise<void>;
  allBrandsFromApi: string[];
  setAllBrandsFromApi: Dispatch<React.SetStateAction<string[]>>;
  setCarsByBrandFromApi: Dispatch<
    React.SetStateAction<ICarByBrandFromKenzieAPI[]>
  >;
  carsByBrandFromApi: ICarByBrandFromKenzieAPI[];
}

export const CarContext = createContext({} as ICarContextValues);

export const CarProvider = ({ children }: IDefaultProviderProps) => {
  const [allCars, setAllCars] = useState([] as ICar[]);
  const [carBrands, setCarBrands] = useState([] as string[]);
  const [carModels, setCarModels] = useState([] as string[]);
  const [carColors, setCarColors] = useState([] as string[]);
  const [carYears, setCarYears] = useState([] as string[]);
  const [carFuelTypes, setCarFuelTypes] = useState([] as string[]);
  const [carMinKm, setCarMinKm] = useState(0);
  const [carMaxKm, setCarMaxKm] = useState(0);
  const [carMinPrice, setCarMinPrice] = useState(0);
  const [carMaxPrice, setCarMaxPrice] = useState(0);
  const [filteredCars, setFilteredCars] = useState([] as ICar[]);
  const [filterCar, setfilterCar] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);

  const [allBrandsFromApi, setAllBrandsFromApi] = useState([] as Array<string>);
  const [modelsByBrandsFromApi, setModelsByBrandsFromApi] = useState(
    [] as Array<string>
  );
  const [carsByBrandFromApi, setCarsByBrandFromApi] = useState(
    [] as Array<ICarByBrandFromKenzieAPI>
  );

  const findValues = (attrName: string): string[] => {
    let values: string[] = [];
    if (isFilterActive) {
      values = filteredCars.map((car) => String(car[attrName]));
    } else {
      values = allCars.map((car) => String(car[attrName]));
    }
    const uniqueValues = [...new Set(values)];
    uniqueValues.sort();

    return uniqueValues;
  };

  const getSortedNumArray = (attrName: string): number[] => {
    const values = findValues(attrName);
    const sortedValues = values.map((str) => Number(str)).sort((a, b) => a - b);

    return sortedValues;
  };

  useEffect(() => {
    const getCars = async () => {
      try {
        const cars = await api.get<ICar[]>('/cars');
        setAllCars(cars.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCars();
  }, []);

  useEffect(() => {
    console.log('entrou');
    const filtered = allCars.filter(
      (car) =>
        Number(car.price) >= carMinPrice &&
        Number(car.price) <= carMaxPrice &&
        car.kilometrage >= carMinKm &&
        car.kilometrage <= carMaxKm &&
        (car.brand.includes(filterCar) ||
          car.model.includes(filterCar) ||
          car.color.includes(filterCar) ||
          car.fuel_type.includes(filterCar) ||
          car.year.toString().includes(filterCar))
    );
    setFilteredCars(filtered);
    console.log(filtered);
  }, [filterCar, carMinKm, carMaxKm, carMinPrice, carMaxPrice]);

  useEffect(() => {
    setCarBrands(findValues('brand'));
    setCarModels(findValues('model'));
    setCarColors(findValues('color'));
    setCarYears(findValues('year'));
    setCarFuelTypes(findValues('fuel_type'));
    setCarMinKm(getSortedNumArray('kilometrage')[0]);
    setCarMaxKm(
      getSortedNumArray('kilometrage')[
        getSortedNumArray('kilometrage').length - 1
      ]
    );
    setCarMinPrice(getSortedNumArray('price')[0]);
    setCarMaxPrice(
      getSortedNumArray('price')[getSortedNumArray('price').length - 1]
    );
  }, [allCars, filteredCars]);

  useEffect(() => {}, [allCars]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkRhdmkgRmVycmVpcmEiLCJ1c2VySWQiOjUsImlhdCI6MTY5MjM3ODg0NiwiZXhwIjoxNjkyMzgyNDQ2LCJzdWIiOiI1In0.qqqSuRkqdQ_uonwwj16_rHNS38vi-P9mDa_xgOEh44U"

  const headersAuth = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const handleCreateCar = async (newCarData: ICreateCar) => {
    console.log(newCarData);


      try {
        const newCarResponse: AxiosResponse = await api.post<ICreateCar>(
          '/cars',
          newCarData,
          headersAuth
        );

        if (newCarResponse.status === 201) {
          // atualizar a lista de carros renderizados
          // mostrar modal de carro criado com sucesso
        }
      } catch (error) {
        // const requestError = error as AxiosError<IAxiosErrorMessage>;
        console.log(error);
      }
    
  };

  const getAllCarsBrandsFromKenzieCars = async () => {
    const allCars = await apiKenzieCars.get<AxiosResponse<string[]>>(`/cars`);
    const allBrands: Array<string> = Object.keys(allCars.data);
    console.log(allCars.data);

    setAllBrandsFromApi(allBrands);
    console.log(allBrands);
  };

  const getModelsCarsByBrandFromKenzieCars = async (brand: string) => {
    const carsByBrand: AxiosResponse<Array<ICarByBrandFromKenzieAPI>> =
      await apiKenzieCars.get<Array<ICarByBrandFromKenzieAPI>>(
        `/cars?brand=${brand}`
      );

    const carsModels = carsByBrand.data.map((car) => car.name);
    setCarsByBrandFromApi(carsByBrand.data);
    setModelsByBrandsFromApi(carsModels);
  };

  return (
    <CarContext.Provider
      value={{
        allCars,
        carBrands,
        carModels,
        carColors,
        carYears,
        carFuelTypes,
        carMinKm,
        carMaxKm,
        carMinPrice,
        carMaxPrice,
        filterCar,
        setfilterCar,
        filteredCars,
        setFilteredCars,
        isFilterActive,
        setIsFilterActive,
        setCarMaxKm,
        setCarMaxPrice,
        setCarMinKm,
        setCarMinPrice,
        handleCreateCar,
        modelsByBrandsFromApi,
        setModelsByBrandsFromApi,
        getModelsCarsByBrandFromKenzieCars,
        getAllCarsBrandsFromKenzieCars,
        allBrandsFromApi,
        setAllBrandsFromApi,
        carsByBrandFromApi,
        setCarsByBrandFromApi
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
