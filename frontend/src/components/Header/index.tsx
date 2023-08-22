import Logo from '../../utils/images/logo1.svg';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { StyledHeader } from './style';
import { useState } from 'react';
import { LinkStyledToLogin, LinkStyledToRegister } from '../../styles/Buttons';
import { useNavigate } from 'react-router-dom';
import { useAuth, useLayout } from '../../hooks';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
// import { useAuth, useModal } from '../../hooks';

export const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  // const { handleShowModal } = useModal();
  const { user, getTwoInitials } = useAuth();
  const { windowWidth } = useLayout();

  const navigate = useNavigate();

  return (
    <StyledHeader showProfileMenu={showProfileMenu}>
      {/* <button
        onClick={() => {
          handleShowModal('createNewCar');
        }}
      >
        Modal
      </button> */}
      <div className='menuContainer'>
        <div className='brandAndButton'>
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
        </div>
        <nav className={showNavMenu ? 'active' : 'hidden'}>
          {user ? (
            <div
              className='profileContainer'
              onClick={() =>
                windowWidth > 640 ? setShowProfileMenu(!showProfileMenu) : null
              }
            >
              <div className='profile'>
                <div className='initials'>{getTwoInitials(user.full_name)}</div>
                <p className='heading-7-500'>{user.full_name}</p>
                <div
                  className={
                    windowWidth > 640
                      ? 'openProfileButton active'
                      : 'openProfileButton hidden'
                  }
                >
                  {showProfileMenu ? <BiChevronUp /> : <BiChevronDown />}
                </div>
              </div>
              <div className='profileFeatures'>
                <p>Editar perfil</p>
                <p>Editar endereço</p>
                {user.is_seller ? <p>Meus Anúncios</p> : null}
                <p className='logout'>Sair</p>
              </div>
            </div>
          ) : (
            <>
              <LinkStyledToLogin
                className='loginBtn buttons-style-button-size-big'
                to={'/login'}
              >
                Fazer Login
              </LinkStyledToLogin>
              <LinkStyledToRegister
                className='buttons-style-button-size-big'
                to={'/register'}
              >
                Cadastro
              </LinkStyledToRegister>
            </>
          )}
        </nav>
      </div>
    </StyledHeader>
  );
};
