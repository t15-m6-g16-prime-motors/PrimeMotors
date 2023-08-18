import { IDefaultProviderProps } from '../interfaces';
import { AuthProvider } from './AuthProvider';
import { CarProvider } from './CarProvider';
import { LayoutProvider } from './LayoutProvider';
import { ModalProvider } from './ModalProvider';

const MainProvider = ({ children }: IDefaultProviderProps) => {
  return (
    <ModalProvider>
      <LayoutProvider>
        <AuthProvider>
          <CarProvider>{children}</CarProvider>
        </AuthProvider>
      </LayoutProvider>
    </ModalProvider>
  );
};

export default MainProvider;
