// import { useForm } from 'react-hook-form';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { StyledRegisterMain } from './style';
import { RegisterUserForm } from '../../components/RegisterUserForm';
import GenericModal from '../../components/Modal/ModalGeneric';
import { useModal } from '../../hooks';

export const RegisterUserPage = () => {
  const { showModal } = useModal();

  return (
    <>
      {showModal && <GenericModal type={showModal} />}
      <Header />
      <StyledRegisterMain>
        <RegisterUserForm />
      </StyledRegisterMain>
      <Footer />
    </>
  );
};
