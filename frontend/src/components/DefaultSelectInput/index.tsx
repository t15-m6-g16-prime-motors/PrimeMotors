import { SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import SelectFieldset from './style';

interface IDefaultFormSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: FieldError;
  name: string;
  array: Array<string>;
}

const DefaultSelectInput = ({
  array,
  label,
  name,
  error,
  ...rest
}: IDefaultFormSelect) => {
  const brandOptions = array.map((element: string) => {
    return <option value={element}>{element}</option>;
  });

  return (
    <SelectFieldset>
      <label className='text-style-inputs-buttons-input-label'>{label}</label>
      <select className='text-style-inputs-buttons-input-placeholder' {...rest}>
        <option value={''}>{name}</option>
        {brandOptions}
      </select>
      {error && <p>{error.message}</p>}
    </SelectFieldset>
  );
};

export default DefaultSelectInput;
