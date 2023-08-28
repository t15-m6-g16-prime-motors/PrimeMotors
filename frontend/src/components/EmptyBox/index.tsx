import { StyledBox } from './style';

interface IEmptyBoxProps {
  text: string;
}

export const EmptyBox = ({ text }: IEmptyBoxProps) => {
  return (
    <StyledBox>
      <p>{text}</p>
    </StyledBox>
  );
};
