import { useCar, useModal } from '../../../../hooks';
import { ButtonAlert, NegativeButton } from '../../../../styles/Buttons';
import DeleteConfirmationContainer from '../style';

const DeleteCarConfirmation = () => {
  const { handleCloseModal } = useModal();
  const { handleDeleteCar } = useCar();

  return (
    <DeleteConfirmationContainer>
      <p className='heading-7-500'>
        Tem certeza que deseja DELETAR seu anúncio?
      </p>
      <p className='text-style-text-body-1-400'>
        Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
        anúncio e removerá todos os comentários e dados associados...
      </p>
      <p className='text-style-text-body-1-400'>
        Clique em <span>EXCLUIR</span> para confirmar.
      </p>
      <div className='buttons__container'>
        <NegativeButton
          className='buttons-style-button-size-big'
          onClick={() => {
            handleCloseModal();
          }}
        >
          Cancelar
        </NegativeButton>
        <ButtonAlert
          className='buttons-style-button-size-big'
          onClick={() => {
            handleDeleteCar();
            handleCloseModal();
          }}
        >
          Excluir
        </ButtonAlert>
      </div>
    </DeleteConfirmationContainer>
  );
};

export default DeleteCarConfirmation;
