import { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';

interface iModalTitle {
  title: string;
}

const ModalHeader = ({ title }: iModalTitle) => {
  const { handleCloseModal } = useContext(ModalContext);
  return (
    <div className='modalHeader'>
      <h3 className='heading-7-500'>{title}</h3>
      <button className='heading-7-500'
        onClick={() => {
          handleCloseModal();
        }}
      >
        X
      </button>
    </div>
  );
};

export { ModalHeader };
