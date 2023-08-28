/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useAuth, useCar } from '../../hooks';
import { Header } from '../../components/Header';
import { StyledMain } from './style';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { EmptyBox } from '../../components/EmptyBox';

export const SellerPage = () => {
  // usando allCars e user provisóriamente
  const { allCars } = useCar();
  const { user } = useAuth();
  const getInitials = (fullName: string) => {
    if (!fullName) return '';

    const names = fullName.split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    } else {
      const firstNameInitial = names[0].charAt(0).toUpperCase();
      const lastNameInitial = names[names.length - 1].charAt(0).toUpperCase();

      return `${firstNameInitial}${lastNameInitial}`;
    }
  };
  return (
    <>
      <Header />
      <StyledMain>
        <section className='container-profile'>
          <div className='blue-color-box'>
            <div className='info-profile'>
              <div className='initials-letter'>
                <h2>{getInitials(user?.full_name!)}</h2>
              </div>

              <div className='container-name-type-user'>
                <h3 className='heading-6-600'>{user?.full_name}</h3>
                {user?.is_seller ? (
                  <span className='text-style-text-body-2-500'>Anunciante</span>
                ) : null}
              </div>
              <p className='text-style-text-body-1-400'>{user?.description}</p>
              <button className='create-announce-btn text-style-inputs-buttons-button-big-text'>
                Criar anuncio
              </button>
            </div>
          </div>
        </section>
        <h1 className='listingsTitle heading-5-600'>Anúncios</h1>
        <ul className='carsList'>
          {allCars.length < 1 ? (
            <div>
              <EmptyBox text='Nenhum anúncio foi postado até o momento.' />
            </div>
          ) : (
            allCars.map((car) => <Card key={car.id} car={car} />)
          )}
        </ul>
        <div className='pagination'>
          <div className='pagesAndButton heading-6-500'>
            <p>
              1 <span>de 2</span>
            </p>
            <div className='previousNextBtnContainer'>
              <button className='heading-6-500'>
                <BiChevronLeft /> Anterior
              </button>
              <button className='heading-6-500'>
                Seguinte <BiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
