import { useContext } from 'react';
import { IGenericModalProps } from './../../../interfaces/modal.interface';
import ModalContainer from './style';
import { ModalContext } from '../../../providers/ModalProvider';
import { ModalHeader } from '../ModalHeader';
import CreateNewCar from '../CreateNewCar';
import { RegisterUserSuccess } from '../RegisterUserSuccess';
import EditDeleteUser from '../EditDeleteUser';
import CreateCarModalResponse from '../CreateNewCar/createCarModalResponse';
import DeleteUserConfirmation from '../DeleteConfirmations/DeleteUserConfirmation';
import EditUserAddress from '../EditUserAddress';
import EditDeleteCar from '../EditDeleteCar';
import { CarPhotoModal } from '../CarPhotoModal';
import { useCar } from '../../../hooks';
import DeleteCarConfirmation from '../DeleteConfirmations/DeleteCarConfirmation';
import DeleteCommentConfirmation from '../DeleteConfirmations/DeleteCommentConfirmation';

const GenericModal = ({ type }: IGenericModalProps) => {
  const { ref } = useContext(ModalContext);
  const { selectedCarPhotoUrl } = useCar();
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

            case 'editAddress':
              return (
                <>
                  <ModalHeader title={'Editar Endereço'} />
                  <EditUserAddress />
                </>
              );

            case 'deleteUser':
              return (
                <>
                  <ModalHeader title={'Deletar Usuário'} />
                  <DeleteUserConfirmation />
                </>
              );

            case 'editCar':
              return (
                <>
                  <ModalHeader title={'Editar Anúncio'} />
                  <EditDeleteCar />
                </>
              );

            case 'deleteCar':
              return (
                <>
                  <ModalHeader title={'Deletar Anúncio?'} />
                  <DeleteCarConfirmation />
                </>
              );

            case 'carPhoto':
              return (
                <>
                  <ModalHeader title={'Imagem do anúncio'} />
                  <CarPhotoModal photoUrl={selectedCarPhotoUrl} />
                </>
              );

            case 'deleteComment':
              return (
                <>
                  <ModalHeader title={'Deletar Comentário?'} />
                  <DeleteCommentConfirmation />
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
