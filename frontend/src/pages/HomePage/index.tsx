import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
// import { ButtonBrand } from '../../styles/Buttons';
import { StyledMain } from './style';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useCar, useLayout } from '../../hooks';

export const HomePage = () => {
  const { windowWidth } = useLayout();
  const { allCars } = useCar();
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
        <section className='listAndFilter'>
          <div className='filterContainer'>
            {windowWidth <= 768 && (
              <div className='filterHeader'>
                <p className='filterTitle heading-7-500'>Filtro</p>
                <button className='closeBtn'>
                  <AiOutlineClose />
                </button>
              </div>
            )}

            <div className='attributesContainer'>
              <div className='attribute'>
                <p className='title'>Marca</p>
                <p className='attributeOption'>Fiat</p>
                <p className='attributeOption'>Ford</p>
                <p className='attributeOption'>Honda</p>
                <p className='attributeOption'>Toyota</p>
                <p className='attributeOption'>Volkswagen</p>
              </div>
              <div className='attribute'>
                <p className='title'>Modelo</p>
                <p className='attributeOption'>Civic</p>
                <p className='attributeOption'>Corolla</p>
                <p className='attributeOption'>Cruze</p>
                <p className='attributeOption'>Fit</p>
                <p className='attributeOption'>Gol</p>
                <p className='attributeOption'>Ka</p>
                <p className='attributeOption'>Onix</p>
              </div>
              <div className='attribute'>
                <p className='title'>Cor</p>
                <p className='attributeOption'>Azul</p>
                <p className='attributeOption'>Vermelho</p>
                <p className='attributeOption'>Branco</p>
                <p className='attributeOption'>Cinza</p>
                <p className='attributeOption'>Prata</p>
                <p className='attributeOption'>Preto</p>
                <p className='attributeOption'>Verde</p>
              </div>
              <div className='attribute'>
                <p className='title'>Ano</p>
                <p className='attributeOption'>2022</p>
                <p className='attributeOption'>2021</p>
                <p className='attributeOption'>2018</p>
              </div>
              <div className='attribute'>
                <p className='title'>Combustível</p>
                <p className='attributeOption'>Elétrico</p>
                <p className='attributeOption'>Híbrido</p>
                <p className='attributeOption'>Flex</p>
                <p className='attributeOption'>Gasolina</p>
                <p className='attributeOption'>Álcool</p>
              </div>
              <div className='attribute'>
                <p className='title'>Km</p>
              </div>
              <div className='attribute'>
                <p className='title'>Preço</p>
              </div>
              <button className='filterBtn buttons-style-button-size-big'>
                Ver anúncios
              </button>
            </div>
          </div>
          <div className='ListPaginationContainer'>
            <ul className='carsList'>
              {allCars.length < 1 ? (
                <div className='emptyBox'>
                  <p>Nenhum anúncio foi postado ainda.</p>
                </div>
              ) : (
                allCars.map((car) => <Card key={car.id} car={car} />)
              )}
            </ul>
            <div className='pagination'>
              {windowWidth <= 1024 && (
                <button className='filterBtn buttons-style-button-size-big'>
                  Filtros
                </button>
              )}

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
          </div>
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};
