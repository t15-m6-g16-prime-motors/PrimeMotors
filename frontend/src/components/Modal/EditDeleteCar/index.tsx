/* eslint-disable @typescript-eslint/no-unused-vars */
import EditDeleteCarContainer from './style';
import { useCar } from '../../../hooks';
import DefaultSelectInput from '../../DefaultSelectInput';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  ICreateCar,
  ICreateCarComplete,
  createCarSchema
} from '../CreateNewCar/createCar.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultFormInput } from '../../DefaultFormInput';
import DefaultTextArea from '../../DefaultTextArea';
import { useEffect, useState } from 'react';
import {
  ButtonBrand,
  ButtonOpacity,
  NegativeButton
} from '../../../styles/Buttons';
import { FiTrash2 } from 'react-icons/fi';

const EditDeleteCar = () => {
  const {
    carToEdit,
    modelsByBrandsFromApi,
    objectSelectedInputCar,
    selectedInputCar,
    setAllBrandsFromApi,
    handleUpdateCar,
    handleDeleteCar,
    newCarFipValue,
    setNewCarFipValue
  } = useCar();

  useEffect(() => {
    objectSelectedInputCar(carToEdit!.model.toLowerCase());
    setAllBrandsFromApi([carToEdit!.brand]);
    setNewCarFipValue('');
  }, []);

  const [newKilometrage, setNewKilometrage] = useState(carToEdit.kilometrage);
  const [newPrice, setNewPrice] = useState(carToEdit.price);
  const [newColor, setNewColor] = useState(carToEdit.color);
  const [newDescription, setNewDescription] = useState(carToEdit.description);
  const [published_in, setPublished_in] = useState<boolean>(
    carToEdit.published
  );
  const [newCoverImage, setNewCoverImage] = useState(
    carToEdit.picture.coverImage
  );
  const [newImage01, setNewImage01] = useState(carToEdit.picture.image01);
  const [newImage02, setNewImage02] = useState(carToEdit.picture.image02);

  const [extraImages, setExtraImages] = useState<Array<string>>([
    'image03',
    'image04',
    'image05',
    'image06'
  ]);

  const [existingExtraImages, setExistingExtraImages] = useState<Array<string>>(
    []
  );

  const handlePublishedClick = () => {
    setPublished_in(true);
  };

  const handleNotPublishedClick = () => {
    setPublished_in(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<ICreateCar>({ resolver: zodResolver(createCarSchema.partial()) });

  const { append, remove } = useFieldArray({
    name: 'extraImages',
    control
  });

  const addMoreImages = () => {
    setExtraImages(extraImages.sort());
    const firstImage = extraImages.shift()!;
    setExistingExtraImages([...existingExtraImages, firstImage]);
    append({ [firstImage]: '' }); // includes value to form schema
  };

  const removeAddedImages = (id: string) => {
    const imageToRemove = existingExtraImages.find((image) => image === id);
    const indexImageToRemove = existingExtraImages.findIndex(
      (image) => image === id
    );

    existingExtraImages.splice(indexImageToRemove, 1);
    setExistingExtraImages([...existingExtraImages]);
    extraImages.push(imageToRemove!);
    setExtraImages([...extraImages, imageToRemove!]);
    setExtraImages(extraImages.sort());
    remove(indexImageToRemove); // remove value from form schema
  };

  const NewInputImg = () => {
    const newInput = existingExtraImages.map((image, index) => {
      return (
        <li key={image} className='imagesLinkInputs__extraInput'>
          <DefaultFormInput
            key={image}
            id={`${image}`}
            label={`Imagem ${image.slice(5, 7)} da Galeria`}
            placeholder='https://...'
            {...register(`extraImages.${index}.${image}`)}
            error={errors.extraImages?.[index]?.[image]}
            value={carToEdit.picture.image03}
          />
          <button
            className='button__deleteInput'
            type='button'
            onClick={() => removeAddedImages(image)}
          >
            <FiTrash2 />
          </button>
        </li>
      );
    });
    return <ul>{newInput}</ul>;
  };

  const handlesubmitNewCar = (newCarFormData: ICreateCar) => {
    let good_deal = false;
    if (Number(newCarFipValue) / Number(newCarFormData.price) >= 1.05) {
      good_deal = true;
    }

    const newCarData: ICreateCarComplete = {
      ...newCarFormData,
      brand: carToEdit.brand,
      good_deal: good_deal,
      fuel_type: selectedInputCar!.fuel,
      year: Number(selectedInputCar?.year),
      kilometrage: Number(newCarFormData?.kilometrage),
      extraImages: [...newCarFormData.extraImages],
      published: published_in
    };

    console.log(newCarData);

    handleUpdateCar(newCarData);
  };

  return (
    <EditDeleteCarContainer>
      <form onSubmit={handleSubmit(handlesubmitNewCar)}>
        <p className='text-style-text-body-2-500'>Informações do veículo</p>
        <DefaultSelectInput
          onChange={(event) => {
            objectSelectedInputCar(event.target.value.toLocaleLowerCase());
          }}
          name={'model'}
          array={modelsByBrandsFromApi}
          about='Selecione o modelo'
          defaultValue={carToEdit.model}
          label='Modelo'
          register={register('model')}
          error={errors.model}
        />

        <div className='carInfos__otherInfos'>
          <DefaultFormInput
            label='Ano'
            placeholder='Ano'
            defaultValue={selectedInputCar?.year || ''}
            disabled={true}
          />

          <DefaultFormInput
            label='Combustível'
            placeholder='Combustível'
            defaultValue={selectedInputCar?.fuel || ''}
            disabled={true}
          />

          <DefaultFormInput
            label='Quilometragem'
            placeholder='Quilometragem'
            {...register('kilometrage')}
            error={errors.kilometrage}
            defaultValue={newKilometrage}
          />

          <DefaultFormInput
            label='Cor'
            placeholder='Cor'
            {...register('color')}
            error={errors.color}
            defaultValue={newColor}
          />

          <DefaultFormInput
            label='Tabela FIP'
            placeholder='Tabela FIP'
            value={selectedInputCar?.value || ''}
            disabled={true}
          />

          <DefaultFormInput
            label='Preço'
            placeholder='Preço'
            {...register('price')}
            error={errors.price}
            defaultValue={newPrice}
          />
        </div>

        <DefaultTextArea
          name={'description'}
          register={register('description')}
          error={errors.description}
          contentValue={newDescription}
        />

        <p className='text-style-text-body-2-500'>Publicado</p>
        <div className='rowContainer'>
          <div
            className={
              published_in
                ? 'yes active text-style-text-body-1-600'
                : 'yes text-style-text-body-1-600'
            }
            onClick={handlePublishedClick}
          >
            Sim
          </div>
          <div
            className={
              published_in
                ? 'no text-style-text-body-1-600'
                : 'no active text-style-text-body-1-600'
            }
            onClick={handleNotPublishedClick}
          >
            Não
          </div>
        </div>

        <div className='imagesLinkInputs'>
          <DefaultFormInput
            label='Imagem de Capa'
            placeholder='https://...'
            {...register('coverImage')}
            error={errors.coverImage}
            defaultValue={newCoverImage}
          />
          <DefaultFormInput
            label='Imagem 01 da Galeria'
            placeholder='https://...'
            {...register('image01')}
            error={errors.image01}
            defaultValue={newImage01}
          />
          <DefaultFormInput
            label='Imagem 02 da Galeria'
            placeholder='https://...'
            {...register('image02')}
            error={errors.image02}
            defaultValue={newImage02}
          />
          <NewInputImg />
        </div>
        <div className='carButtons'>
          <div className='carButtons__addImg'>
            <ButtonOpacity
              onClick={() => {
                addMoreImages();
              }}
              className='text-style-text-body-2-500'
              type='button'
              disabled={extraImages.length === 0 ? true : false}
            >
              Adicionar mais imagens
            </ButtonOpacity>
          </div>
          <div className='carButtons__deleteSave'>
            <NegativeButton
              type='button'
              onClick={() => {
                handleDeleteCar();
              }}
              className='buttons-style-button-size-big'
            >
              Excluir Anúncio
            </NegativeButton>
            <ButtonBrand
              type='submit'
              className='buttons-style-button-size-big'
            >
              Salvar
            </ButtonBrand>
          </div>
        </div>
      </form>
    </EditDeleteCarContainer>
  );
};

export default EditDeleteCar;
