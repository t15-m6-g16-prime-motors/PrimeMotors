import { IDefaultProviderProps } from '../interfaces';
import { LayoutProvider } from './LayoutProvider';

const MainProvider = ({ children }: IDefaultProviderProps) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default MainProvider;
