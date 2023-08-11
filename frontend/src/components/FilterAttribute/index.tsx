import { IFilterAttributeProps } from '../../interfaces';
import { StyledAttributeDiv } from './style';

export const FilterAttribute = ({
  title,
  attributeState
}: IFilterAttributeProps) => {
  return (
    <StyledAttributeDiv className='attribute'>
      <p className='title'>{title}</p>
      {attributeState.map((item) => (
        <p className='attributeOption' key={item}>
          {item}
        </p>
      ))}
    </StyledAttributeDiv>
  );
};
