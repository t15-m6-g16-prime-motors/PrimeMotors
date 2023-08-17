import { zodResolver } from '@hookform/resolvers/zod';
import { TLoginUser } from '../../interfaces';
import { DefaultFormInput } from '../DefaultFormInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginUserSchema } from '../../schemas';
import { useState } from 'react';
import { LinkStyledToRegister } from '../../styles/Buttons';

export const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginUser>({
    resolver: zodResolver(loginUserSchema)
  });

  const submit: SubmitHandler<TLoginUser> = (formData) => {
    console.log(formData);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2 className='title heading-4-500'>Login</h2>
      <DefaultFormInput
        label='Email'
        type='text'
        placeholder='Ex: fulano@email.com'
        {...register('email')}
        disabled={loading}
        error={errors.email}
      />
      <DefaultFormInput
        label='Senha'
        type='password'
        placeholder='Digite sua senha'
        {...register('password')}
        disabled={loading}
        error={errors.password}
      />
      <span className='forgotPassword text-style-text-body-2-500'>
        Esqueci minha senha
      </span>

      <button
        type='submit'
        className='submitBtn text-style-text-body-2-500'
        disabled={loading}
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>

      <span className='registerAccount'>Ainda não possui conta?</span>

      <LinkStyledToRegister
        className='text-style-text-body-2-500'
        id='registerPageLink'
        to={'/register'}
      >
        Cadastrar
      </LinkStyledToRegister>
    </form>
  );
};
