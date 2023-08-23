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
import { useAuth } from '../../../hooks';

type IEditUser = z.infer<typeof editUserSchema>;

const EditDeleteUser = () => {
  const {
    register,
    formState: { errors }
  } = useForm<IEditUser>({ resolver: zodResolver(editUserSchema) });

  const { user } = useAuth();
  console.log(user);
  return (
    <EditUserContainer>
      <p className='text-style-text-body-2-500'>Informações pessoais</p>
      <form>
        <DefaultFormInput
          label='Nome'
          error={errors.full_name}
          defaultValue={user?.full_name}
        />
        <DefaultFormInput
          label='Email'
          error={errors.email}
          defaultValue={user?.email}
        />
        <DefaultFormInput
          label='CPF'
          error={errors.cpf}
          defaultValue={user?.cpf}
        />
        <DefaultFormInput
          label='Celular'
          error={errors.phone_number}
          defaultValue={user?.phone_number}
        />
        <DefaultFormInput
          label='Data de Nascimento'
          error={errors.birthdate}
          defaultValue={user?.birthdate}
        />
        <DefaultTextArea
          register={register('description')}
          name='description'
          error={errors.description}
          descriptionValue={user?.description}
        />
        <div>
          <NegativeButton className='buttons-style-button-size-big'>
            Cancelar
          </NegativeButton>
          <ButtonAlert className='buttons-style-button-size-big'>
            Excluir Perfil
          </ButtonAlert>
          <ButtonBrand className='buttons-style-button-size-big'>
            Salvar Alterações
          </ButtonBrand>
        </div>
      </form>
    </EditUserContainer>
  );
};

export default EditDeleteUser;
