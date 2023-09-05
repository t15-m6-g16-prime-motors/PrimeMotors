import { useContext } from 'react';
import { useModal } from '../../../../hooks';
import { ButtonAlert, NegativeButton } from '../../../../styles/Buttons';
import DeleteConfirmationContainer from '../style';
import { CommentsContext } from '../../../../providers/CommentsProvider';

const DeleteCommentConfirmation = () => {
  const { handleCloseModal } = useModal();
  const { deleteComment } = useContext(CommentsContext);

  return (
    <DeleteConfirmationContainer>
      <p className='heading-7-500'>
        Tem certeza que deseja DELETAR seu comentário?
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
            deleteComment();
            handleCloseModal();
          }}
        >
          Excluir
        </ButtonAlert>
      </div>
    </DeleteConfirmationContainer>
  );
};

export default DeleteCommentConfirmation;
