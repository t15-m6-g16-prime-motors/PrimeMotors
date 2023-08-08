import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { StyledMain } from './style';

export const HomePage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <h1>Home Page</h1>
      </StyledMain>
      <Footer />
    </>
  );
};
