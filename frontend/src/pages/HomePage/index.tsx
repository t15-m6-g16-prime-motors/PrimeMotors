import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
// import { ButtonBrand } from '../../styles/Buttons';
import { StyledMain } from './style';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { useCar, useLayout } from '../../hooks';
// import { FilterAttribute } from '../../components/FilterAttribute';

export const HomePage = () => {
  const { windowWidth } = useLayout();
  const {
    allCars,
    carBrands,
    carModels,
    carColors,
    carYears,
    carFuelTypes,
    carMinKm,
    carMaxKm,
    carMinPrice,
    carMaxPrice,
    setfilterCar,
    filterCar
  } = useCar();

  const [showFilters, setShowFilters] = useState(false);

  const handleBrandClick = (filter: string) => {
    setfilterCar(filter);
  };

  const handleClearBrand = () => {
    setfilterCar('')
    allCars
  };

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
              <div className='attribute'>
                <p className='title'>Marca</p>
                {carBrands.map((brand) => (
                  <p
                    className='attributeOption'
                    key={brand}
                    onClick={() => handleBrandClick(brand)}
                  >
                    {brand}
                  </p>
                ))}
              </div>
              <div className='attribute'>
                <p className='title'>Modelo</p>
                {carModels.map((model) => (
                  <p
                    className='attributeOption'
                    key={model}
                    onClick={() => handleBrandClick(model)}
                  >
                    {model}
                  </p>
                ))}
              </div>
              <div className='attribute'>
                <p className='title'>Cor</p>
                {carColors.map((color) => (
                  <p
                    className='attributeOption'
                    key={color}
                    onClick={() => handleBrandClick(color)}
                  >
                    {color}
                  </p>
                ))}
              </div>
              <div className='attribute'>
                <p className='title'>Ano</p>
                {carYears.map((year) => (
                  <p
                    className='attributeOption'
                    key={year}
                    onClick={() => handleBrandClick(year)}
                  >
                    {year}
                  </p>
                ))}
              </div>
              <div className='attribute'>
                <p className='title'>Combustível</p>
                {carFuelTypes.map((fuelType) => (
                  <p
                    className='attributeOption'
                    key={fuelType}
                    onClick={() => handleBrandClick(fuelType)}
                  >
                    {fuelType}
                  </p>
                ))}
              </div>
              {/* <FilterAttribute attributeState={carBrands} title='Marca' />
              <FilterAttribute attributeState={carModels} title='Modelo' />
              <FilterAttribute attributeState={carColors} title='Cor' />
              <FilterAttribute attributeState={carYears} title='Ano' />
              <FilterAttribute
                attributeState={carFuelTypes}
                title='Combustível'
              /> */}

              <div className='attribute'>
                <p className='title'>Km</p>
                <p>Min Km: {carMinKm}</p>
                <p>Max Km: {carMaxKm}</p>
              </div>
              <div className='attribute'>
                <p className='title'>Preço</p>
                <p>Min Price: {carMinPrice}</p>
                <p>Max Price: {carMaxPrice}</p>
              </div>
              {filterCar && (
              <button className='filterBtn buttons-style-button-size-big'
              onClick={handleClearBrand}>
                Limpar filtros
              </button>
              )}
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
