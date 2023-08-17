import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useCar } from '../../hooks';
import { StyledMain } from './style';

export const UserProfilePage = () => {
  const { allCars } = useCar();
  return (
    <>
      {/* falta a estilizacao certa do background da main e do section profile fazer o desktop style */}
      <Header />
      <StyledMain>
        <section className='container-profile'>
          <div className='blue-color-box'>
            <div className='info-profile'>
              <div className='initials-letter'>
                <h2>SL</h2>
              </div>

              <div className='container-name-type-user'>
                <h3 className='heading-6-600'>Samuel Leao</h3>
                <span className='text-style-text-body-2-500'>Anunciante</span>
              </div>
              <p className='text-style-text-body-1-400'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button className='create-announce-btn text-style-inputs-buttons-button-big-text'>
                Criar anuncio
              </button>
            </div>
          </div>
        </section>
        <ul className='carsList'>
          {allCars.length < 1 ? (
            <div className='emptyBox'>
              <p>Nenhum anúncio foi postado até o momento.</p>
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
