import { SelectHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import SelectFieldset from './style';

interface IDefaultFormSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn<string>;
  name: string;
  array: Array<string>;
}

const DefaultSelectInput = ({
  array,
  label,
  about,
  error,
  register,
  ...rest
}: IDefaultFormSelect) => {
  const brandOptions = array.map((element: string) => {
    return (
      <option
        key={element.charAt(0).toUpperCase() + element.slice(1)}
        value={element.charAt(0).toUpperCase() + element.slice(1)}
      >
        {element.charAt(0).toUpperCase() + element.slice(1)}
      </option>
    );
  });

  return (
    <SelectFieldset>
      <label className='text-style-inputs-buttons-input-label'>{label}</label>
      <select
        className='text-style-inputs-buttons-input-placeholder'
        {...register}
        {...rest}
      >
        <option value={''}>{about}</option>
        {brandOptions}
      </select>
      {error ? <p className='inputErrorMessage'>{error.message}</p> : <p></p>}
    </SelectFieldset>
  );
};

export default DefaultSelectInput;
