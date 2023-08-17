import { IDefaultProviderProps } from '../interfaces';
import { CarProvider } from './CarProvider';
import { LayoutProvider } from './LayoutProvider';
import { ModalProvider } from './ModalProvider';

const MainProvider = ({ children }: IDefaultProviderProps) => {
  return (
    <ModalProvider>
      <LayoutProvider>
        <CarProvider>{children}</CarProvider>
      </LayoutProvider>
    </ModalProvider>
  );
};

export default MainProvider;
