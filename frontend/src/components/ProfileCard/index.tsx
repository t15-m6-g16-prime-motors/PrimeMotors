import { useNavigate } from 'react-router-dom';
import { useCar } from '../../hooks';
import { ICardProps } from '../../interfaces';
import { StyledProfileCardContainer } from './style';

export const ProfileCard = ({ car }: ICardProps) => {
  const { setSelectedCar, findCarToEdit } = useCar();
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedCar(car);
    navigate(`/listing/${car.id}`);
  };

  return (
    <>
      <StyledProfileCardContainer>
        <div className='imageContainer'>
          <img src={car.picture.coverImage} alt='Car image' />
          {car.published ? (
            <div className='activeTag text-style-text-body-2-500'>Ativo</div>
          ) : (
            <div className='inactiveTag text-style-text-body-2-500'>
              Inativo
            </div>
          )}
        </div>
        <h3 className='title heading-7-600'>
          {car.brand} - {car.model}
        </h3>
        <p className='description text-style-text-body-2-400'>
          {car.description}
        </p>
        <div className='carInfo'>
          <div className='tagsContainer text-style-text-body-2-500'>
            <p className='tag'>{car.kilometrage.toLocaleString('pt-BR')} km</p>
            <p className='tag'>{car.year}</p>
          </div>

          <p className='price heading-7-500'>
            {parseFloat(car.price).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
        </div>
        <div className='buttonsContainer'>
          <button
            onClick={() => {
              findCarToEdit(car.id);
            }}
            className='editButton'
          >
            Editar
          </button>
          <button className='detailButton' onClick={handleClick}>
            Ver detalhes
          </button>
        </div>
      </StyledProfileCardContainer>
    </>
  );
};
