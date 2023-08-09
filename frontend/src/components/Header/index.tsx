import Logo from '../../utils/images/logo1.svg';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { StyledHeader } from './style';
import { useState } from 'react';
import { LinkStyledToLogin, LinkStyledToRegister } from '../../styles/Buttons';

export const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <StyledHeader>
      <div className='menuContainer'>
        <div>
          <img src={Logo} alt='brand logo' />
        </div>
        <button
          onClick={() => {
            setShowNavMenu(!showNavMenu);
          }}
        >
          {showNavMenu ? <GrClose /> : <FaBars />}
        </button>
        {showNavMenu ? <NavMenu /> : null}
      </div>
    </StyledHeader>
  );
};

const NavMenu = () => {
  return (
    <>
      <nav>
        <LinkStyledToLogin className='buttons-style-button-size-big' to={'/'}>
          Fazer Login
        </LinkStyledToLogin>
        <LinkStyledToRegister className='buttons-style-button-size-big' to={'/'}>Cadastro</LinkStyledToRegister>
      </nav>
    </>
  );
};
