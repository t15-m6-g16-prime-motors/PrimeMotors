import { createContext, useEffect, useState } from 'react';
import { IDefaultProviderProps } from '../interfaces';

interface ILayoutContextValues {
  windowWidth: number;
}

export const LayoutContext = createContext({} as ILayoutContextValues);

export const LayoutProvider = ({ children }: IDefaultProviderProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <LayoutContext.Provider value={{ windowWidth }}>
      {children}
    </LayoutContext.Provider>
  );
};
