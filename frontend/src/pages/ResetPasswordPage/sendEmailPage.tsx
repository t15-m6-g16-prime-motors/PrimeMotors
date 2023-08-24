import { useForm, SubmitHandler } from 'react-hook-form';
import { DefaultFormInput } from '../../components/DefaultFormInput';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledMain } from './style';
import { sendEmailSchema } from '../../schemas';
import { TSendEmail } from '../../interfaces';
import { useAuth } from '../../hooks';

export const SendEmailPage = () => {
  const { sendResetPasswordEmail } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TSendEmail>({
    resolver: zodResolver(sendEmailSchema)
  });

  const sendEmail: SubmitHandler<TSendEmail> = (data) => {
    console.log(data);
    sendResetPasswordEmail(data);
  };

  return (
    <>
      <Header />
      <StyledMain>
        <form onSubmit={handleSubmit(sendEmail)}>
          <h2 className='heading-6-600'>Recuperação de senha</h2>
          <DefaultFormInput
            label='Envie seu email'
            placeholder='Digite aqui'
            {...register('email')}
            error={errors.email}
          />
          <button type='submit' className='submitBtn'>
            Enviar
          </button>
        </form>
      </StyledMain>
      <Footer />
    </>
  );
};
