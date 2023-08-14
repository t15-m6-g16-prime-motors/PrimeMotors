/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, createContext, useEffect, useState } from 'react';
import { ICar, IDefaultProviderProps } from '../interfaces';
import { api } from '../services/api';

interface ICarContextValues {
  allCars: ICar[];
  carBrands: string[];
  carModels: string[];
  carColors: string[];
  carYears: string[];
  carFuelTypes: string[];
  CarMinKm: number;
  CarMaxKm: number;
  CarMinPrice: number;
  CarMaxPrice: number;
  setfilterCar: Dispatch<React.SetStateAction<string>>
}

export const CarContext = createContext({} as ICarContextValues);

export const CarProvider = ({ children }: IDefaultProviderProps) => {
  const [allCars, setAllCars] = useState([] as ICar[]);
  const [carBrands, setCarBrands] = useState([] as string[]);
  const [carModels, setCarModels] = useState([] as string[]);
  const [carColors, setCarColors] = useState([] as string[]);
  const [carYears, setCarYears] = useState([] as string[]);
  const [carFuelTypes, setCarFuelTypes] = useState([] as string[]);
  const [CarMinKm, setCarMinKm] = useState(0);
  const [CarMaxKm, setCarMaxKm] = useState(0);
  const [CarMinPrice, setCarMinPrice] = useState(0);
  const [CarMaxPrice, setCarMaxPrice] = useState(0);
  const [filterCar, setfilterCar] = useState('');

  const findValues = (attrName: string): string[] => {
    const values: string[] = allCars.map((car) => String(car[attrName]));
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
    if (filterCar === '') {
      setAllCars(allCars);
    } else {
      const filtered = allCars.filter(car => 
        car.brand.includes(filterCar) || 
        car.model.includes(filterCar) || 
        car.color.includes(filterCar) || 
        car.fuel_type.includes(filterCar) ||
        car.year.toString().includes(filterCar)
        );
      setAllCars(filtered);
    }
  }, [filterCar]);

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
  }, [allCars]);

  return (
    <CarContext.Provider
      value={{
        allCars,
        carBrands,
        carModels,
        carColors,
        carYears,
        carFuelTypes,
        CarMinKm,
        CarMaxKm,
        CarMinPrice,
        CarMaxPrice,
        setfilterCar
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
