import { useContext } from 'react';
import { CarContext } from '../providers/CarProvider';

const useCar = () => {
  const carContext = useContext(CarContext);

  return carContext;
};

export default useCar;
