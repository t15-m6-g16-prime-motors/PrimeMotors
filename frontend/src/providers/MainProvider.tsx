import { IDefaultProviderProps } from '../interfaces';
import { CarProvider } from './CarProvider';
import { LayoutProvider } from './LayoutProvider';

const MainProvider = ({ children }: IDefaultProviderProps) => {
  return (
    <LayoutProvider>
      <CarProvider>{children}</CarProvider>
    </LayoutProvider>
  );
};

export default MainProvider;
