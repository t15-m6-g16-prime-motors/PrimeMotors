import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import StyledTextAreaContainer from './style';
import { TextareaHTMLAttributes } from 'react';

interface IDefaultTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  contentValue?: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn<string>;
}

const DefaultTextArea = ({
  register,
  contentValue,
  error
}: IDefaultTextArea) => {
  return (
    <StyledTextAreaContainer>
      <p className='text-style-inputs-buttons-input-label'>Descrição</p>
      <textarea defaultValue={contentValue} {...register} />
      {error ? <p className='inputErrorMessage'>{error.message}</p> : <p></p>}
    </StyledTextAreaContainer>
  );
};

export default DefaultTextArea;
