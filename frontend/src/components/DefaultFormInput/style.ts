import { FieldError } from 'react-hook-form';
import { styled } from 'styled-components';

interface StyledInputContainerProps {
  error?: FieldError;
}

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  width: 100%;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 0.18rem solid
      ${(props) =>
        props.error ? 'var(--color-alert-2)' : 'var(--color-grey-6)'};
    border-radius: 0.2rem;
    font-family: var(--font-family-inter);
    box-sizing: border-box;
    outline: none;

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
