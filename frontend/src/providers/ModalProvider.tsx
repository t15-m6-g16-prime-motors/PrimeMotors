import { createContext, useEffect, useRef, useState } from 'react';
import { IModalContextProps } from '../interfaces/modal.interface';
import { IDefaultProviderProps } from '../interfaces';

export const ModalContext = createContext({} as IModalContextProps);

export const ModalProvider = ({ children }: IDefaultProviderProps) => {
  const [showModal, setShowModal] = useState<null | string>(null);
  const ref = useRef(null);

  useEffect(() => {
    const handleModalOutClick = (event: Event) => {
      if (ref.current === event.target) {
        setShowModal(null);
      }
    };
    window.addEventListener('click', handleModalOutClick);

    return () => {
      window.removeEventListener('click', handleModalOutClick);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(null);
  };

  const handleShowModal = (type: string | null) => {
    setShowModal(type);
  };
  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        handleShowModal,
        handleCloseModal,
        ref
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
