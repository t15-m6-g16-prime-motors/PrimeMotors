import { useContext } from 'react';
import { IGenericModalProps } from './../../../interfaces/modal.interface';
import ModalContainer from './style';
import { ModalContext } from '../../../providers/ModalProvider';
import { ModalHeader } from '../ModalHeader';
import CreateNewCar from '../CreateNewCar';
import { RegisterUserSuccess } from '../RegisterUserSuccess';
import EditDeleteUser from '../EditDeleteUser';
import CreateCarModalResponse from '../CreateNewCar/createCarModalResponse';
import DeleteUserConfirmation from '../DeleteUserConfirmation';

const GenericModal = ({ type }: IGenericModalProps) => {
  const { ref } = useContext(ModalContext);
  return (
    <ModalContainer ref={ref}>
      <div className='modalBody slideDown'>
        {(() => {
          switch (type) {
            case 'createNewCar':
              return (
                <>
                  <ModalHeader title={'Criar Anúncio'} />
                  <CreateNewCar />
                </>
              );
            case 'registerUserResponse':
              return (
                <>
                  <ModalHeader title={'Sucesso!'} />
                  <RegisterUserSuccess />
                </>
              );

            case 'createNewCarResponse':
              return (
                <>
                  <ModalHeader title={'Sucesso!'} />
                  <CreateCarModalResponse />
                </>
              );

            case 'editUser':
              return (
                <>
                  <ModalHeader title={'Editar Usuário'} />
                  <EditDeleteUser />
                </>
              );

            case 'deleteUser':
              return (
                <>
                  <ModalHeader title={'Deletar Usuário'} />
                  <DeleteUserConfirmation />
                </>
              );

            default:
              return null;
          }
        })()}
      </div>
    </ModalContainer>
  );
};

export default GenericModal;
