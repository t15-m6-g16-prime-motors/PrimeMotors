import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { StyledMain } from './style';

export const HomePage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <section className='welcomeBox'>
          <h1 className='heading-5-600'>Motors Shop</h1>
          <p className='heading-6-600'>
            A melhor plataforma de anúncios de carros do país
          </p>
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};
