import { useAuth, useModal } from '../../../hooks';
import { ButtonAlert, NegativeButton } from '../../../styles/Buttons';
import DeleteUserContainer from './style';

const DeleteUserConfirmation = () => {
  const { handleCloseModal } = useModal();
  const { deleteUser } = useAuth();
  return (
    <DeleteUserContainer>
      <p className='heading-7-500'>
        Tem certeza que deseja DELETAR seu usuário?
      </p>
      <p className='text-style-text-body-1-400'>
        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
        e removerá seus dados de nossos servidores...
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
            deleteUser();
            handleCloseModal();
          }}
        >
          Excluir
        </ButtonAlert>
      </div>
    </DeleteUserContainer>
  );
};

export default DeleteUserConfirmation;
