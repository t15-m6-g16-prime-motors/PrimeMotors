import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterUserRequest, TRegisterUser } from '../../interfaces';
import { registerUserSchema } from '../../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultFormInput } from '../DefaultFormInput';
import { useModal } from '../../hooks';
import { useAuth } from '../../hooks/useAuth';

export const RegisterUserForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isSeller, setIsSeller] = useState<boolean>(false);

  const { handleShowModal } = useModal();

  const handleBuyerClick = () => {
    setIsSeller(false);
  };
  const handleSellerClick = () => {
    setIsSeller(true);
  };

  const organizeData = (data: TRegisterUser): IRegisterUserRequest => {
    const user = {
      full_name: data.full_name,
      email: data.email,
      cpf: data.cpf,
      phone_number: data.phone_number,
      birthdate: data.birthdate,
      description: data.description,
      is_seller: data.is_seller,
      password: data.password
    };

    const address = {
      postal_code: data.postal_code,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      complement: data.complement
    };

    const organizedData = {
      ...user,
      address
    };

    return organizedData;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TRegisterUser>({
    resolver: zodResolver(registerUserSchema)
  });

  const { signUp } = useAuth();

  const submit: SubmitHandler<TRegisterUser> = (formData) => {
    formData.is_seller = isSeller;

    const organizedData = organizeData(formData);
    console.log(organizedData);
    setLoading(false);
    signUp;
    handleShowModal('registerUserResponse');
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2 className='title heading-4-500'>Cadastro</h2>
      <h4 className='subtitle text-style-text-body-2-500'>
        Informações pessoais
      </h4>
      <DefaultFormInput
        label='Nome'
        type='text'
        placeholder='Ex: Fulano Silva'
        {...register('full_name')}
        disabled={loading}
        error={errors.full_name}
      />
      <DefaultFormInput
        label='Email'
        type='text'
        placeholder='Ex: fulanosilva@mail.com.br'
        {...register('email')}
        disabled={loading}
        error={errors.email}
      />
      <DefaultFormInput
        label='CPF'
        type='text'
        placeholder='000.000.000-00'
        {...register('cpf')}
        disabled={loading}
        error={errors.cpf}
      />
      <DefaultFormInput
        label='Telefone'
        type='text'
        placeholder='(00) 00000-0000'
        {...register('phone_number')}
        disabled={loading}
        error={errors.phone_number}
      />
      <DefaultFormInput
        label='Nascimento'
        type='text'
        placeholder='DD/MM/YYYY'
        {...register('birthdate')}
        disabled={loading}
        error={errors.birthdate}
      />
      <DefaultFormInput
        label='Descrição'
        type='text'
        placeholder='Digite uma descrição sobre você'
        {...register('description')}
        disabled={loading}
        error={errors.description}
      />

      <h4 className='subtitle text-style-text-body-2-500'>
        Informações de endereço
      </h4>
      <DefaultFormInput
        label='CEP'
        type='text'
        placeholder='00000-00'
        {...register('postal_code')}
        disabled={loading}
        error={errors.postal_code}
      />
      <div className='rowContainer'>
        <DefaultFormInput
          label='Estado'
          type='text'
          placeholder='Digitar estado'
          {...register('state')}
          disabled={loading}
          error={errors.state}
        />
        <DefaultFormInput
          label='Cidade'
          type='text'
          placeholder='Digitar cidade'
          {...register('city')}
          disabled={loading}
          error={errors.city}
        />
      </div>
      <DefaultFormInput
        label='Rua'
        type='text'
        {...register('street')}
        placeholder='Digitar rua'
        disabled={loading}
        error={errors.street}
      />
      <div className='rowContainer'>
        <DefaultFormInput
          label='Número'
          type='text'
          placeholder='Digitar número'
          {...register('number')}
          disabled={loading}
          error={errors.number}
        />
        <DefaultFormInput
          label='Complemento'
          type='text'
          placeholder='Ex: apt 307'
          {...register('complement')}
          disabled={loading}
          error={errors.complement}
        />
      </div>

      <h4 className='subtitle text-style-text-body-2-500'>Tipo de conta</h4>
      <div className='rowContainer'>
        <div
          className={isSeller ? 'buyer' : 'buyer active'}
          onClick={handleBuyerClick}
        >
          Comprador
        </div>
        <div
          className={isSeller ? 'seller active' : 'seller'}
          onClick={handleSellerClick}
        >
          Anunciante
        </div>
      </div>

      <DefaultFormInput
        label='Senha'
        type='password'
        {...register('password')}
        placeholder='Digite sua senha'
        disabled={loading}
        error={errors.password}
      />
      <DefaultFormInput
        label='Confirmação de senha'
        type='password'
        placeholder='Digite a mesma senha'
        {...register('confirm_password')}
        disabled={loading}
        error={errors.confirm_password}
      />

      <button
        type='submit'
        className='submitBtn text-style-text-body-2-500'
        disabled={loading}
      >
        {loading ? 'Finalizando...' : 'Finalizar cadastro'}
      </button>
    </form>
  );
};
