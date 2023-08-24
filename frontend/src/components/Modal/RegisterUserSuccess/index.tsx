import { useNavigate } from 'react-router-dom';
import { useModal } from '../../../hooks';
import { ButtonBrand } from '../../../styles/Buttons';
import { StyledRegisterSuccessDiv } from './style';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';

export const RegisterUserSuccess = () => {
  const { handleCloseModal } = useModal();
  const navigate = useNavigate();
  return (
    <StyledRegisterSuccessDiv className='container'>
      <p className='subtitle heading-7-500'>
        Sua conta foi criada com sucesso! <BsFillEmojiLaughingFill />
      </p>
      <p className='description text-style-text-body-1-400'>
        Agora você poderá ver seus negócios crescendo em grande escala
      </p>
      <ButtonBrand
        onClick={() => {
          handleCloseModal();
          navigate('/login');
        }}
        className='buttons-style-button-size-big'
      >
        Ir para login
      </ButtonBrand>
    </StyledRegisterSuccessDiv>
  );
};
