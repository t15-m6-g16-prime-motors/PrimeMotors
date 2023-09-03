import { IDefaultProviderProps } from '../interfaces';
import { AuthProvider } from './AuthProvider';
import { CarProvider } from './CarProvider';
import { CommentsProvider } from './CommentsProvider';
import { LayoutProvider } from './LayoutProvider';
import { ModalProvider } from './ModalProvider';

const MainProvider = ({ children }: IDefaultProviderProps) => {
  return (
    <LayoutProvider>
      <AuthProvider>
        <CarProvider>
          <CommentsProvider>
            <ModalProvider>{children}</ModalProvider>
          </CommentsProvider>
        </CarProvider>
      </AuthProvider>
    </LayoutProvider>
  );
};

export default MainProvider;
