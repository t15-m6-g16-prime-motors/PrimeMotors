import { zodResolver } from '@hookform/resolvers/zod';
import {
  ButtonDisabled,
  ButtonOpacity,
  NegativeButton
} from '../../../styles/Buttons';
import { DefaultFormInput } from '../../DefaultFormInput';
import DefaultSelectInput from '../../DefaultSelectInput';
import DefaultTextArea from '../../DefaultTextArea';
import NewCarContainer from './style';
import { useForm } from 'react-hook-form';
import { ICreateCar, createCarSchema } from './createCar.schema';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../../providers/CarProvider';
import { ModalContext } from '../../../providers/ModalProvider';
import { ICarByBrandFromKenzieAPI } from '../../../interfaces/cars.interfaces';

const CreateNewCar = () => {
  const [selectedCar, setSelectedCar] = useState(
    {} as ICarByBrandFromKenzieAPI | undefined
  );
  const [newCarFipValue, setNewCarFipValue] = useState<string | number>('');

  const {
    handleCreateCar,
    modelsByBrandsFromApi,
    allBrandsFromApi,
    getAllCarsBrandsFromKenzieCars,
    getModelsCarsByBrandFromKenzieCars,
    carsByBrandFromApi
  } = useContext(CarContext);

  const { handleCloseModal } = useContext(ModalContext);

  const objectSelectedCar = (model: string) => {
    const car = carsByBrandFromApi.find((car) => car.name === model);
    setNewCarFipValue(car!.value);

    if (car?.fuel === 1) {
      car.fuel = 'Flex';
    }

    if (car?.fuel === 2) {
      car.fuel = 'Híbrido';
    }

    if (car?.fuel === 3) {
      car.fuel = 'Elétrico';
    }

    car!.value = car!.value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    setSelectedCar(car);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ICreateCar>({ resolver: zodResolver(createCarSchema) });

  useEffect(() => {
    getAllCarsBrandsFromKenzieCars();
  }, []);

  const handlesubmitNewCar = (newCarFormData: ICreateCar) => {
    let good_deal = false;
    if (Number(newCarFipValue) / Number(newCarFormData.price) >= 1.05) {
      good_deal = true;
    }

    const newCarData = {
      ...newCarFormData,
      good_deal: good_deal,
      fuel_type: selectedCar!.fuel,
      year: Number(selectedCar?.year),
      kilometrage: Number(newCarFormData?.kilometrage)
    };
    handleCreateCar(newCarData);
  };

  return (
    <NewCarContainer>
      <p className='text-style-text-body-2-500'>Informações do veículo</p>
      <form onSubmit={handleSubmit(handlesubmitNewCar)}>
        <DefaultSelectInput
          onChange={async (event) => {
            await getModelsCarsByBrandFromKenzieCars(
              event.target.value.toLowerCase()
            );
          }}
          name={'brand'}
          array={allBrandsFromApi}
          about='Marca'
          label='Marca'
          register={register('brand')}
          error={errors.brand}
        />
        <DefaultSelectInput
          onChange={(event) => {
            objectSelectedCar(event.target.value.toLocaleLowerCase());
          }}
          name={'model'}
          array={modelsByBrandsFromApi}
          about='Modelo'
          label='Modelo'
          register={register('model')}
          error={errors.model}
        />
        <div className='carInfos__otherInfos'>
          <DefaultFormInput
            label='Ano'
            placeholder='Ano'
            value={selectedCar?.year || ''}
            disabled={true}
          />
          <DefaultFormInput
            label='Combustível'
            placeholder='Combustível'
            value={selectedCar?.fuel || ''}
            disabled={true}
          />
          <DefaultFormInput
            label='Quilometragem'
            placeholder='Quilometragem'
            {...register('kilometrage')}
            error={errors.kilometrage}
          />
          <DefaultFormInput
            label='Cor'
            placeholder='Cor'
            {...register('color')}
            error={errors.color}
          />
          <DefaultFormInput
            label='Tabela FIP'
            placeholder='Tabela FIP'
            value={selectedCar?.value || ''}
            disabled={true}
          />
          <DefaultFormInput
            label='Preço'
            placeholder='Preço'
            {...register('price')}
            error={errors.price}
          />
        </div>
        <DefaultTextArea
          name={'description'}
          register={register('description')}
          error={errors.description}
        />
        <div className='imagesLinkInputs'>
          <DefaultFormInput
            label='Imagem de Capa'
            placeholder='https://...'
            {...register('coverImage')}
          />
          <DefaultFormInput
            label='Imagem da Galeria'
            placeholder='https://...'
            {...register('image01')}
          />
          <DefaultFormInput
            label='Imagem da Galeria'
            placeholder='https://...'
            {...register('image02')}
          />
        </div>

        <div className='carButtons'>
          <div className='carButtons__addImg'>
            <ButtonOpacity className='text-style-text-body-2-500' type='button'>
              Adicionar mais imagens
            </ButtonOpacity>
          </div>
          <div className='carButtons__deleteSave'>
            <NegativeButton
              onClick={handleCloseModal}
              className='buttons-style-button-size-big'
            >
              Cancelar
            </NegativeButton>
            <ButtonDisabled className='buttons-style-button-size-big'>
              Salvar
            </ButtonDisabled>
          </div>
        </div>
      </form>
    </NewCarContainer>
  );
};

export default CreateNewCar;
