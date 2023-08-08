import Logo from '../../utils/images/logo1.svg';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { StyledHeader } from './style';

export const Header = () => {
  return (
    <StyledHeader>
      <div className='menuContainer'>
        <img src={Logo} alt='brand logo' />
        <button className='menuBtn hidden'>
          <BiMenu />
        </button>
        <button className='menuBtn'>
          <AiOutlineClose />
        </button>
      </div>
      <div className='loginResgiterContainer'>
        <p>Fazer Login</p>
        <button>Cadastrar</button>
      </div>
    </StyledHeader>
  );
};
