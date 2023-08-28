import { useForm } from 'react-hook-form';
import { DefaultFormInput } from '../../DefaultFormInput';
import DefaultTextArea from '../../DefaultTextArea';
import EditUserContainer from './style';
import { zodResolver } from '@hookform/resolvers/zod';
import { editUserSchema } from '../../../schemas/user.schemas';
import { z } from 'zod';
import {
  ButtonAlert,
  ButtonBrand,
  NegativeButton
} from '../../../styles/Buttons';
import { useAuth, useModal } from '../../../hooks';
import { useState } from 'react';

type IEditUser = z.infer<typeof editUserSchema>;
export type { IEditUser };

const EditDeleteUser = () => {
  const { handleCloseModal, handleShowModal } = useModal();
  const { user, editUser } = useAuth();

  const formatDate = (date: string) => {
    const dateArray = date.split(`-`);
    return dateArray.reverse().join('/');
  };

  const [newfull_name, setNewFull_name] = useState<string | undefined>(
    user?.full_name
  );
  const [newEmail, setNewEmail] = useState<string | undefined>(user?.email);
  const [newCPF, setNewCPF] = useState<string | undefined>(user?.cpf);
  const [newPhoneNumber, setNewPhoneNumber] = useState<string | undefined>(
    user?.phone_number
  );
  const [newBirthdate, setNewBirthdate] = useState<string | undefined>(
    formatDate(user!.birthdate)
  );
  const [newDescription, setNewDescription] = useState<string | undefined>(
    user?.description
  );
  console.log(newDescription);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IEditUser>({ resolver: zodResolver(editUserSchema) });

  const organizedForm = (updatedUserFormData: IEditUser) => {
    if (user?.email === newEmail) {
      delete updatedUserFormData.email;
    }

    if (user?.cpf === newCPF) {
      delete updatedUserFormData.cpf;
    }
    
    const formatDate = (date: string) => {
      const dateArray = date.split(`/`);
      return dateArray.reverse().join('-');
    };
    
    updatedUserFormData.birthdate = formatDate(newBirthdate!);
    
    editUser(updatedUserFormData);
  };

  return (
    <EditUserContainer>
      <p className='text-style-text-body-2-500'>Informações pessoais</p>
      <form onSubmit={handleSubmit(organizedForm)}>
        <DefaultFormInput
          label='Nome'
          defaultValue={newfull_name}
          {...register('full_name')}
          error={errors.full_name}
          onChange={(event) => {
            setNewFull_name(event.target.value);
          }}
        />
        <DefaultFormInput
          label='Email'
          defaultValue={newEmail}
          {...register('email')}
          error={errors.email}
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
        />
        <DefaultFormInput
          label='CPF'
          {...register('cpf')}
          error={errors.cpf}
          defaultValue={newCPF}
          onChange={(event) => {
            setNewCPF(event.target.value);
          }}
        />
        <DefaultFormInput
          label='Celular'
          {...register('phone_number')}
          error={errors.phone_number}
          defaultValue={newPhoneNumber}
          onChange={(event) => {
            setNewPhoneNumber(event.target.value);
          }}
        />
        <DefaultFormInput
          label='Data de Nascimento'
          {...register('birthdate')}
          error={errors.birthdate}
          defaultValue={newBirthdate}
          onChange={(event) => {
            setNewBirthdate(event.target.value);
          }}
        />
        <DefaultTextArea
          register={register('description')}
          error={errors.description}
          onChange={(event) => {
            setNewDescription(event.target.defaultValue);
          }}
          contentValue={newDescription}
        />
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
          <ButtonAlert
            type='button'
            className='buttons-style-button-size-big'
            onClick={() => {
              handleShowModal('deleteUser');
            }}
          >
            Excluir Perfil
          </ButtonAlert>
          <ButtonBrand type='submit' className='buttons-style-button-size-big'>
            Salvar Alterações
          </ButtonBrand>
        </div>
      </form>
    </EditUserContainer>
  );
};

export default EditDeleteUser;
