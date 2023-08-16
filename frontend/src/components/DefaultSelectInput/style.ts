import { FieldError } from 'react-hook-form';
import { styled } from 'styled-components';

interface ISelectFieldSetProps {
  error?: FieldError;
}

const SelectFieldset = styled.fieldset<ISelectFieldSetProps>`
  select {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid
      ${(props) =>
        props.error ? 'var(--color-alert-2)' : 'var(--color-grey-6)'};
    border-radius: 0.2rem;
    font-family: var(--font-family-inter);
    box-sizing: border-box;
    outline: none;
    background-color: var(--color-white-fixed);
    margin-bottom: 24px;
    margin-top: 8px;

    &:focus {
      border-color: ${(props) =>
        props.error ? 'var(--color-alert-1)' : 'var(--color-brand-2)'};
    }
  }
`;

export default SelectFieldset;
