import { DefaultFormInput } from '../../DefaultFormInput';
import DefaultSelectInput from '../../DefaultSelectInput';
import DescriptionTextArea from '../../DescriptionTextArea';
import NewCarContainer from './style';

const CreateNewCar = () => {
  const brands = ['Chevrolet', 'Nissan'];
  return (
    <NewCarContainer>
      <p className='text-style-text-body-2-500'>Informações do veículo</p>
      <form>
        <DefaultSelectInput
          name='Selecione a marca'
          array={brands}
          label='Marcas'
        />
        <DefaultSelectInput
          name='Selecione o modelo'
          array={brands}
          label='Modelo'
        />
        <div className='carInfos__otherInfos'>
          <DefaultFormInput label='Ano' placeholder='Ano' />
          <DefaultFormInput label='Combustível' placeholder='Combustível' />
          <DefaultFormInput label='Quilometragem' placeholder='Quilometragem' />
          <DefaultFormInput label='Cor' placeholder='Cor' />
          <DefaultFormInput label='Tabela FIP' placeholder='Tabela FIP' />
          <DefaultFormInput label='Preço' placeholder='Preço' />
        </div>
        <p className='text-style-inputs-buttons-input-label'>Descrição</p>
        <DescriptionTextArea />
      </form>
    </NewCarContainer>
  );
};

export default CreateNewCar;
