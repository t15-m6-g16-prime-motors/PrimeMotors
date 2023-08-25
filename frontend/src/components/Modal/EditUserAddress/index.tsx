import { useForm } from 'react-hook-form';
import { DefaultFormInput } from '../../DefaultFormInput';
import EditAddressContainer from './style';
import { editUserAddressSchema } from '../../../schemas/user.schemas';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth, useModal } from '../../../hooks';
import { ButtonBrand, NegativeButton } from '../../../styles/Buttons';
import { useState } from 'react';

type IEditUserAddress = z.infer<typeof editUserAddressSchema>;
export type { IEditUserAddress };

const EditUserAddress = () => {
  const { user, editAddress } = useAuth();
  const { handleCloseModal } = useModal();

  const [newPostalCode, setNewPostalCode] = useState(user?.address.postal_code);
  const [newState, setNewState] = useState<string | undefined>(
    user?.address.state
  );
  const [newCity, setNewCity] = useState<string | undefined>(
    user?.address.city
  );
  const [newStreet, setNewStreet] = useState<string | undefined>(
    user?.address.street
  );
  const [newNumber, setNewNumber] = useState<string | undefined>(
    user?.address.number
  );
  const [newComplement, setNewComplement] = useState<string | undefined>(
    user?.address.complement
  );

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IEditUserAddress>({
    resolver: zodResolver(editUserAddressSchema)
  });

  return (
    <EditAddressContainer>
      <p className='text-style-text-body-2-500'>Informações de endereço</p>

      <form onSubmit={handleSubmit(editAddress)}>
        <DefaultFormInput
          label='CEP'
          type='text'
          placeholder='00000-00'
          defaultValue={newPostalCode}
          {...register('postal_code')}
          error={errors.postal_code}
          onChange={(event) => {
            setNewPostalCode(event.target.value);
          }}
        />
        <div className='rowContainer'>
          <DefaultFormInput
            label='Estado'
            type='text'
            placeholder='Digitar estado'
            defaultValue={newState}
            {...register('state')}
            error={errors.state}
            onChange={(event) => {
              setNewState(event.target.value);
            }}
          />
          <DefaultFormInput
            label='Cidade'
            type='text'
            placeholder='Digitar cidade'
            defaultValue={newCity}
            {...register('city')}
            error={errors.city}
            onChange={(event) => {
              setNewCity(event.target.value);
            }}
          />
        </div>
        <DefaultFormInput
          label='Rua'
          type='text'
          {...register('street')}
          defaultValue={newStreet}
          placeholder='Digitar rua'
          error={errors.street}
          onChange={(event) => {
            setNewStreet(event.target.value);
          }}
        />
        <div className='rowContainer'>
          <DefaultFormInput
            label='Número'
            type='text'
            placeholder='Digitar número'
            defaultValue={newNumber}
            {...register('number')}
            error={errors.number}
            onChange={(event) => {
              setNewNumber(event.target.value);
            }}
          />
          <DefaultFormInput
            label='Complemento'
            type='text'
            placeholder='Ex: apt 307'
            defaultValue={newComplement}
            {...register('complement')}
            error={errors.complement}
            onChange={(event) => {
              setNewComplement(event.target.value);
            }}
          />
        </div>
        <div className='buttons__container'>
          <NegativeButton
            type='button'
            className='buttons-style-button-size-big'
            onClick={() => {
              handleCloseModal();
            }}
          >
            Cancelar
          </NegativeButton>
          <ButtonBrand type='submit' className='buttons-style-button-size-big'>
            Salvar Alterações
          </ButtonBrand>
        </div>
      </form>
    </EditAddressContainer>
  );
};

export default EditUserAddress;
