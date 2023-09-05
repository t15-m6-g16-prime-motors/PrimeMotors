import { IDefaultProviderProps } from '../interfaces';
import { AuthProvider } from './AuthProvider';
import { CarProvider } from './CarProvider';
import { CommentsProvider } from './CommentsProvider';
import { LayoutProvider } from './LayoutProvider';
import { ModalProvider } from './ModalProvider';

const MainProvider = ({ children }: IDefaultProviderProps) => {
  return (
    <LayoutProvider>
      <ModalProvider>
        <AuthProvider>
          <CarProvider>
            <CommentsProvider>{children}</CommentsProvider>
          </CarProvider>
        </AuthProvider>
      </ModalProvider>
    </LayoutProvider>
  );
};

export default MainProvider;
