/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from 'react-hook-form';
import { StyledInput } from './style';

interface IDefaultFormInput {
  inputName: string;
  inputKey: string;
  placeholder: string;
  registerFuntion: UseFormRegister<any>;
}

export const DefaultFormInput = ({
  inputName,
  inputKey,
  placeholder,
  registerFuntion
}: IDefaultFormInput) => {
  return (
    <StyledInput>
      <label
        className='text-style-inputs-buttons-input-label'
        htmlFor={inputKey}
      >
        {inputName}
      </label>
      <input
        className='text-style-inputs-buttons-input-placeholder'
        type='text'
        id={inputKey}
        placeholder={placeholder}
        {...registerFuntion(inputKey)}
      />
    </StyledInput>
  );
};
