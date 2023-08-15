import Logo from '../../utils/images/logo1.svg';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { StyledHeader } from './style';
import { useState } from 'react';
import { LinkStyledToLogin, LinkStyledToRegister } from '../../styles/Buttons';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div className='menuContainer'>
        <div className='brandContainer' onClick={() => navigate('/')}>
          <img src={Logo} alt='brand logo' />
        </div>
        <button
          onClick={() => {
            setShowNavMenu(!showNavMenu);
          }}
        >
          {showNavMenu ? <GrClose /> : <FaBars />}
        </button>
        <nav className={showNavMenu ? 'active' : 'hidden'}>
          <LinkStyledToLogin
            className='loginBtn buttons-style-button-size-big'
            to={'/'}
          >
            Fazer Login
          </LinkStyledToLogin>
          <LinkStyledToRegister
            className='buttons-style-button-size-big'
            to={'/register'}
          >
            Cadastro
          </LinkStyledToRegister>
        </nav>
      </div>
    </StyledHeader>
  );
};
