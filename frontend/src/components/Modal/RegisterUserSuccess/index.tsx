import { LinkStyledToLogin } from '../../../styles/Buttons';
import { StyledRegisterSuccessDiv } from './style';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';

export const RegisterUserSuccess = () => {
  return (
    <StyledRegisterSuccessDiv className='container'>
      <p className='subtitle heading-7-500'>
        Sua conta foi criada com sucesso! <BsFillEmojiLaughingFill />
      </p>
      <p className='description text-style-text-body-1-400'>
        Agora você poderá ver seus negócios crescendo em grande escala
      </p>
      <LinkStyledToLogin className='loginLinkBtn' to='/login'>
        Ir para login
      </LinkStyledToLogin>
    </StyledRegisterSuccessDiv>
  );
};
