import { StyledCardContainer } from './style';
import carSvg from '../../utils/images/mustang.svg';

export const Card = () => {
  return (
    <StyledCardContainer>
      <div className='imageContainer'>
        <img src={carSvg} alt='Car image' />
      </div>
      <h3 className='title heading-7-600'>Ford - Mustang</h3>
      <p className='description text-style-text-body-2-400'>
        O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
        Company. O carro foi apresentado ao público em 17 de abril de 1964
        durante a New York World's Fair.
      </p>
      <div className='profile'>
        <div>SL</div>
        <p className='name text-style-text-body-2-500'>Samuel Leão</p>
      </div>
      <div className='carInfo'>
        <div className='tagsContainer text-style-text-body-2-500'>
          <p className='tag'>500 km</p>
          <p className='tag'>2019</p>
        </div>

        <p className='price heading-7-500'>R$ 100.000,00</p>
      </div>
    </StyledCardContainer>
  );
};
