import { StyledCardContainer } from './style';
import { ICardProps } from '../../interfaces';
import { useAuth, useCar } from '../../hooks';
import { useNavigate } from 'react-router-dom';

export const Card = ({ car }: ICardProps) => {
  const { setSelectedCar, setSelectedSeller } = useCar();
  const { getTwoInitials } = useAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedCar(car);
    navigate('/listing');
  };

  const handleProfileClick = () => {
    setSelectedSeller(car.user);
    navigate('/seller');
  };

  return (
    <StyledCardContainer>
      <div className='imageContainer' onClick={handleClick}>
        <img src={car.picture.coverImage} alt='Car image' />
      </div>
      <h3 className='title heading-7-600' onClick={handleClick}>
        {car.brand} - {car.model}
      </h3>
      <p className='description text-style-text-body-2-400'>
        {car.description}
      </p>
      <div className='profile' onClick={handleProfileClick}>
        <div>{getTwoInitials(car.user.full_name)}</div>
        <p className='name text-style-text-body-2-500'>{car.user.full_name}</p>
      </div>
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
    </StyledCardContainer>
  );
};
