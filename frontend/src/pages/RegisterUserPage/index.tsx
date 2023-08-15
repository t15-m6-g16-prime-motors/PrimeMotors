// import { useForm } from 'react-hook-form';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { StyledRegisterMain } from './style';
import { RegisterUserForm } from '../../components/RegisterUserForm';

export const RegisterUserPage = () => {
  return (
    <>
      <Header />
      <StyledRegisterMain>
        {/* <form onSubmit={handleSubmit(submitFunction)} noValidate>
          <h2 className='title heading-5-500'>Cadastro</h2>
          <h4 className='subtitle text-style-text-body-2-500'>
            Informações pessoais
          </h4>
          <DefaultFormInput
            inputKey='full_name'
            inputName='Nome'
            placeholder='Ex: Fulano Silva'
            registerFuntion={register}
            errors={errors}
          />
          <DefaultFormInput
            inputKey='email'
            inputName='Email'
            placeholder='Ex: fulanosilva@mail.com.br'
            registerFuntion={register}
            errors={errors}
          />
          <DefaultFormInput
            inputKey='personal_id'
            inputName='CPF'
            placeholder='000.000.000-00'
            registerFuntion={register}
            errors={errors}
          />
          <DefaultFormInput
            inputKey='phone_number'
            inputName='Celular'
            placeholder='(00) 00000-0000'
            registerFuntion={register}
            errors={errors}
          />
          <DefaultFormInput
            inputKey='birthdate'
            inputName='Data de nascimento'
            placeholder='Ex: 00/00/0000'
            registerFuntion={register}
            errors={errors}
          />
          <DefaultFormInput
            inputKey='description'
            inputName='Descrição'
            placeholder='Digite uma descrição sobre você'
            registerFuntion={register}
            errors={errors}
          />

          <h4 className='subtitle text-style-text-body-2-500'>
            Informações de endereço
          </h4>
          <DefaultFormInput
            inputKey='postal_code'
            inputName='CEP'
            placeholder='00000-00'
            registerFuntion={register}
            errors={errors}
          />
          <div className='rowContainer'>
            <DefaultFormInput
              inputKey='state'
              inputName='Estado'
              placeholder='Digitar estado'
              registerFuntion={register}
              errors={errors}
            />
            <DefaultFormInput
              inputKey='city'
              inputName='Cidade'
              placeholder='Digitar cidade'
              registerFuntion={register}
              errors={errors}
            />
          </div>
          <DefaultFormInput
            inputKey='street'
            inputName='Rua'
            placeholder='Digitar rua'
            registerFuntion={register}
            errors={errors}
          />
          <div className='rowContainer'>
            <DefaultFormInput
              inputKey='number'
              inputName='Número'
              placeholder='Digitar número'
              registerFuntion={register}
              errors={errors}
            />
            <DefaultFormInput
              inputKey='complement'
              inputName='Complemento'
              placeholder='Ex: apt 307'
              registerFuntion={register}
              errors={errors}
            />
          </div>

          <h4 className='subtitle text-style-text-body-2-500'>Tipo de conta</h4>
          <div className='rowContainer text-style-inputs-buttons-button-big-text'>
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
            inputKey='password'
            inputName='Senha'
            placeholder='Digite sua senha'
            registerFuntion={register}
            errors={errors}
          />
          <DefaultFormInput
            inputKey='confirm_password'
            inputName='Confirmação de Senha'
            placeholder='Digite a mesma senha'
            registerFuntion={register}
            errors={errors}
          />

          <button
            type='submit'
            className='submitBtn text-style-text-body-2-500'
          >
            Finalizar cadastro
          </button>
        </form> */}
        {/* <LoginForm /> */}
        <RegisterUserForm />
      </StyledRegisterMain>
      <Footer />
    </>
  );
};
