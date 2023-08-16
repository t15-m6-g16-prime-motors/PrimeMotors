import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';
import { StyledLoginMain } from './style';

export const LoginPage = () => {
  return (
    <>
      <Header />
      <StyledLoginMain>
        <LoginForm />
      </StyledLoginMain>
      <Footer />
    </>
  );
};
