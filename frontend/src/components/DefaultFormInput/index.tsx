import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { StyledInputContainer } from './style';

interface IDefaultFormInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

export const DefaultFormInput = forwardRef(
  (
    { label, error, ...rest }: IDefaultFormInput,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <StyledInputContainer error={error}>
      {label ? <label>{label}</label> : null}
      <input ref={ref} {...rest} />
      {error ? <p className='inputErrorMessage'>{error.message}</p> : <p></p>}
    </StyledInputContainer>
  )
);
