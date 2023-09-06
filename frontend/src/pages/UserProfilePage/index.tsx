/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useAuth, useCar, useModal } from '../../hooks';
import { StyledMain } from './style';
import { ProfileCard } from '../../components/ProfileCard';
import { EmptyBox } from '../../components/EmptyBox';
import { Card } from '../../components/Card';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GenericModal from '../../components/Modal/ModalGeneric';
import PaginationComponent from '../../components/Pagination';

export const UserProfilePage = () => {
  const {
    allCars,
    selectedSeller,
    setSelectedSeller,
    setSellersCars,
    carPerPage
  } = useCar();
  const { user, getTwoInitials, getRandomColor } = useAuth();
  const { showModal, handleShowModal } = useModal();
  const { id } = useParams();

  const navigate = useNavigate();

  const isProfileOwner = user?.email === selectedSeller.email;

  useEffect(() => {
    if (user && selectedSeller.full_name === user.full_name)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  });

  useEffect(() => {
    setSellersCars(allCars.filter((car) => car.user.id === selectedSeller.id));
  }, [selectedSeller, allCars]);

  useEffect(() => {
    if (allCars.length > 0 && selectedSeller.id === 0) {
      const userCar = allCars.find((car) => car.user.id === Number(id));

      if (userCar) {
        setSelectedSeller(userCar.user);
      } else {
        if (user) {
          const { id, description, email, full_name, is_seller, phone_number } =
            user!;

          const userWithNoCar = {
            id,
            description,
            email,
            full_name,
            is_seller,
            phone_number
          };
          setSelectedSeller(userWithNoCar);
        } else {
          navigate('/');
        }
      }
    }
  }, [allCars]);

  const colorCode = getRandomColor(Number(id));

  return (
    <>
      {showModal && <GenericModal type={showModal} />}

      <Header />
      <StyledMain color={colorCode}>
        <section className='container-profile'>
          <div className='blue-color-box'>
            <div className='info-profile'>
              <div className='initials-letter'>
                <h2>
                  {isProfileOwner
                    ? getTwoInitials(user.full_name!)
                    : getTwoInitials(selectedSeller.full_name!)}
                </h2>
              </div>

              <div className='container-name-type-user'>
                <h3 className='heading-6-600'>
                  {isProfileOwner ? user?.full_name : selectedSeller.full_name}
                </h3>
                <span className='text-style-text-body-2-500'>Anunciante</span>
              </div>
              <p className='userDescription text-style-text-body-1-400'>
                {isProfileOwner ? user.description : selectedSeller.description}
              </p>
              {isProfileOwner && (
                <button
                  className='create-announce-btn text-style-inputs-buttons-button-big-text'
                  onClick={() => {
                    handleShowModal('createNewCar');
                  }}
                >
                  Criar anuncio
                </button>
              )}
            </div>
          </div>
        </section>
        <section className='listSection'>
          <h1 className='listingsTitle heading-5-600'>Anúncios</h1>
          <ul className='carsList'>
            {carPerPage.length < 1 ? (
              <div>
                <EmptyBox text='Nenhum anúncio foi postado até o momento.' />
              </div>
            ) : (
              carPerPage.map((car) => {
                if (isProfileOwner) {
                  return <ProfileCard key={car.id} car={car} />;
                }
                if (car.published) {
                  return <Card key={car.id} car={car} />;
                }
              })
            )}
          </ul>
          <PaginationComponent page='userProfile' />
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};
