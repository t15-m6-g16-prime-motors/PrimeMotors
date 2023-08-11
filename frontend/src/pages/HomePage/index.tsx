import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
// import { ButtonBrand } from '../../styles/Buttons';
import { StyledMain } from './style';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { useCar, useLayout } from '../../hooks';
import { FilterAttribute } from '../../components/FilterAttribute';

export const HomePage = () => {
  const { windowWidth } = useLayout();
  const {
    allCars,
    carBrands,
    carModels,
    carColors,
    carYears,
    carFuelTypes,
    CarMinKm,
    CarMaxKm,
    CarMinPrice,
    CarMaxPrice
  } = useCar();

  const [showFilters, setShowFilters] = useState(false);

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
          <div
            className={
              showFilters
                ? 'filterContainer showFilters'
                : ' filterContainer hideFilters'
            }
          >
            {windowWidth <= 768 && (
              <div className='filterHeader'>
                <p className='filterTitle heading-7-500'>Filtro</p>
                <button
                  onClick={() => {
                    setShowFilters(!showFilters);
                  }}
                  className='closeBtn'
                >
                  <AiOutlineClose />
                </button>
              </div>
            )}

            <div className='attributesContainer'>
              <FilterAttribute attributeState={carBrands} title='Marca' />
              <FilterAttribute attributeState={carModels} title='Modelo' />
              <FilterAttribute attributeState={carColors} title='Cor' />
              <FilterAttribute attributeState={carYears} title='Ano' />
              <FilterAttribute
                attributeState={carFuelTypes}
                title='Combustível'
              />

              <div className='attribute'>
                <p className='title'>Km</p>
                <p>Min Km: {CarMinKm}</p>
                <p>Max Km: {CarMaxKm}</p>
              </div>
              <div className='attribute'>
                <p className='title'>Preço</p>
                <p>Min Price: {CarMinPrice}</p>
                <p>Max Price: {CarMaxPrice}</p>
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
                <button
                  onClick={() => {
                    setShowFilters(!showFilters);
                  }}
                  className='filterBtn buttons-style-button-size-big'
                >
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
