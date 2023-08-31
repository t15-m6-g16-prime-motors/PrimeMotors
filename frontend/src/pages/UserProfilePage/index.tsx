/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useAuth, useCar, useModal } from '../../hooks';
import { StyledMain } from './style';
import { ProfileCard } from '../../components/ProfileCard';
import { EmptyBox } from '../../components/EmptyBox';
import { Card } from '../../components/Card';
import { useEffect } from 'react';
import { ICar } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import GenericModal from '../../components/Modal/ModalGeneric';

export const UserProfilePage = () => {
  const { allCars, selectedSeller } = useCar();
  const { user, getTwoInitials } = useAuth();
  const { showModal } = useModal();

  const navigate = useNavigate();

  const sellersCars: ICar[] = allCars.filter(
    (car) => car.user.id === selectedSeller.id
  );

  const isProfileOwner = user?.email === selectedSeller.email;

  useEffect(() => {
    if (selectedSeller.id === 0) {
      navigate('/');
    }

    if (user && selectedSeller.full_name === user.full_name)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  }, []);

  return (
    <>
      {showModal && <GenericModal type={showModal} />}

      <Header />
      <StyledMain>
        <section className='container-profile'>
          <div className='blue-color-box'>
            <div className='info-profile'>
              <div className='initials-letter'>
                <h2>
                  {selectedSeller.full_name
                    ? getTwoInitials(selectedSeller.full_name!)
                    : null}
                </h2>
              </div>

              <div className='container-name-type-user'>
                <h3 className='heading-6-600'>{selectedSeller?.full_name}</h3>
                <span className='text-style-text-body-2-500'>Anunciante</span>
              </div>
              <p className='text-style-text-body-1-400'>{user?.description}</p>
              {isProfileOwner && (
                <button className='create-announce-btn text-style-inputs-buttons-button-big-text'>
                  Criar anuncio
                </button>
              )}
            </div>
          </div>
        </section>
        <section className='listSection'>
          <h1 className='listingsTitle heading-5-600'>Anúncios</h1>
          <ul className='carsList'>
            {sellersCars.length < 1 ? (
              <div>
                <EmptyBox text='Nenhum anúncio foi postado até o momento.' />
              </div>
            ) : (
              sellersCars.map((car) =>
                isProfileOwner ? (
                  <ProfileCard key={car.id} car={car} />
                ) : (
                  <Card key={car.id} car={car} />
                )
              )
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
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};
