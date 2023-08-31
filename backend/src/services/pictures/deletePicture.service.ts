import { Repository } from 'typeorm';
import { Picture } from '../../entities';
import { AppDataSource } from '../../data-source';
import { TSetToNullCarPictureRequest } from '../../interfaces/car.interfaces';

const setPictureToNullService = async (
  picData: TSetToNullCarPictureRequest,
  picsId: number
) => {
  const picturesRepository: Repository<Picture> =
    AppDataSource.getRepository(Picture);

  const pictures: Picture | null = await picturesRepository.findOneBy({
    id: picsId
  });

  console.log(picData);

  const pictureToNull = picturesRepository.create({ ...pictures, ...picData });
  picturesRepository.save(pictureToNull);

  return pictureToNull;
};

export default setPictureToNullService;
