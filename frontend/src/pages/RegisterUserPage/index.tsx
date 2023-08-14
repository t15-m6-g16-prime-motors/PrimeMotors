import { useForm } from 'react-hook-form';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { StyledRegisterMain } from './style';
import { TRegisterUser } from '../../interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUserSchema } from '../../schemas';
import { DefaultFormInput } from '../../components/DefaultFormInput';

export const RegisterUserPage = () => {
  const { register } = useForm<TRegisterUser>({
    resolver: zodResolver(registerUserSchema)
  });

  return (
    <>
      <Header />
      <StyledRegisterMain>
        <form>
          <h2 className='title heading-5-500'>Cadastro</h2>
          <h4 className='subtitle text-style-text-body-2-500'>
            Informações pessoais
          </h4>
          <DefaultFormInput
            inputKey='full_name'
            inputName='Nome'
            placeholder='Ex: Fulano Silva'
            registerFuntion={register}
          />
          <DefaultFormInput
            inputKey='email'
            inputName='Email'
            placeholder='Ex: fulanosilva@mail.com.br'
            registerFuntion={register}
          />
          <DefaultFormInput
            inputKey='personal_id'
            inputName='CPF'
            placeholder='000.000.000-00'
            registerFuntion={register}
          />
          <DefaultFormInput
            inputKey='phone_number'
            inputName='Celular'
            placeholder=''
            registerFuntion={register}
          />
          <DefaultFormInput
            inputKey='birthdate'
            inputName='Data de nascimento'
            placeholder=''
            registerFuntion={register}
          />
          <DefaultFormInput
            inputKey='description'
            inputName='Descrição'
            placeholder=''
            registerFuntion={register}
          />

          <h4 className='subtitle text-style-text-body-2-500'>
            Informações de endereço
          </h4>
        </form>
      </StyledRegisterMain>
      <Footer />
    </>
  );
};
