import { FieldError } from 'react-hook-form';
import { styled } from 'styled-components';

interface ISelectFieldSetProps {
  error?: FieldError;
}

const SelectFieldset = styled.fieldset<ISelectFieldSetProps>`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  width: 100%;
  
  select {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid
      ${(props) =>
        props.error ? 'var(--color-alert-2)' : 'var(--color-grey-6)'};
    border-radius: 0.2rem;
    box-sizing: border-box;
    background-color: var(--color-white-fixed);
    color: var(--color-grey-3);

    &:focus {
      border-color: ${(props) =>
        props.error ? 'var(--color-alert-1)' : 'var(--color-brand-2)'};
    }
  }

  p {
    display: flex;
    justify-content: flex-start;
    height: 1rem;
  }

  .inputErrorMessage {
    font-weight: 500;
    font-size: 0.8rem;
    color: var(--color-alert-1);
  }
`;

export default SelectFieldset;
