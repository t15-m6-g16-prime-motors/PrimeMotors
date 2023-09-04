import { StyledPhotoContainer } from './style';

interface ICarPhotoModalProps {
  photoUrl: string;
}

export const CarPhotoModal = ({ photoUrl }: ICarPhotoModalProps) => {
  return (
    <StyledPhotoContainer>
      <img src={photoUrl} alt='Car photo' />
    </StyledPhotoContainer>
  );
};
