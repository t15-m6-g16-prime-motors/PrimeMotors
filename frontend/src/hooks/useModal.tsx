import { useContext } from 'react';
import { ModalContext } from '../providers/ModalProvider';

const useModal = () => {
  const modalContext = useContext(ModalContext);

  return modalContext;
};

export default useModal;
