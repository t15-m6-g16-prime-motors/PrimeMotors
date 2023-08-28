import { IDefaultProviderProps } from '../interfaces';
import { AuthProvider } from './AuthProvider';
import { CarProvider } from './CarProvider';
import { LayoutProvider } from './LayoutProvider';
import { ModalProvider } from './ModalProvider';

const MainProvider = ({ children }: IDefaultProviderProps) => {
  return (
    <LayoutProvider>
      <ModalProvider>
        <AuthProvider>
          <CarProvider>{children}</CarProvider>
        </AuthProvider>
      </ModalProvider>
    </LayoutProvider>
  );
};

export default MainProvider;
