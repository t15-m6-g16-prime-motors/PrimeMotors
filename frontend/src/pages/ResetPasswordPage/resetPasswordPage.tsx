import { useForm, SubmitHandler } from 'react-hook-form';
import { TResetPassword } from '../../interfaces/users.interfaces';
import { resetPasswordSchema } from '../../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledMain } from './style';
import { Header } from '../../components/Header';
import { DefaultFormInput } from '../../components/DefaultFormInput';
import { Footer } from '../../components/Footer';
import { useParams } from 'react-router-dom';

export const ResetPasswordPage = () => {
  const { token } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TResetPassword>({
    resolver: zodResolver(resetPasswordSchema)
  });

  const submit: SubmitHandler<TResetPassword> = (data) => {
    console.log(data);
    console.log('token: ' + token);
  };

  return (
    <>
      <Header />
      <StyledMain>
        <form onSubmit={handleSubmit(() => submit)}>
          <h2 className='heading-6-600'>Redefinição de senha</h2>
          <DefaultFormInput
            label='Senha'
            placeholder='Digite sua senha'
            {...register('password')}
            error={errors.password}
          />
          <DefaultFormInput
            label='Confirmação de senha'
            placeholder='Digite sua senha'
            {...register('confirm_password')}
            error={errors.confirm_password}
          />
          <button type='submit' className='submitBtn'>
            Redefinir
          </button>
        </form>
      </StyledMain>
      <Footer />
    </>
  );
};
