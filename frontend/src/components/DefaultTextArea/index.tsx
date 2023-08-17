import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import StyledTextAreaContainer from './style';
import { TextareaHTMLAttributes } from 'react';

interface IDefaultTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  descriptionValue?: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn<string>;
}

const DefaultTextArea = ({
  register,
  descriptionValue,
  error
}: IDefaultTextArea) => {
  return (
    <StyledTextAreaContainer>
      <p className='text-style-inputs-buttons-input-label'>Descrição</p>
      <textarea {...register}>{descriptionValue}</textarea>
      {error ? <p className='inputErrorMessage'>{error.message}</p> : <p></p>}
    </StyledTextAreaContainer>
  );
};

export default DefaultTextArea;
