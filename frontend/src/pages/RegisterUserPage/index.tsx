// import { useForm } from 'react-hook-form';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { StyledRegisterMain } from './style';
import { RegisterUserForm } from '../../components/RegisterUserForm';

export const RegisterUserPage = () => {
  return (
    <>
      <Header />
      <StyledRegisterMain>
        <RegisterUserForm />
      </StyledRegisterMain>
      <Footer />
    </>
  );
};
