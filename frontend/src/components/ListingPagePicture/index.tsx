import { useCar, useModal } from '../../hooks';

interface IListingPagePictureProps {
  carPhotoUrl: string;
}

export const ListingPagePicture = ({
  carPhotoUrl
}: IListingPagePictureProps) => {
  const { setSelectedCarPhotoUrl } = useCar();
  const { handleShowModal } = useModal();

  const handlePhotoClick = () => {
    console.log(carPhotoUrl);
    setSelectedCarPhotoUrl(carPhotoUrl);
    handleShowModal('carPhoto');
  };
  return (
    <li onClick={handlePhotoClick}>
      <img src={carPhotoUrl} alt='foto secundária do carro' />
    </li>
  );
};
