import { FieldError } from 'react-hook-form';
import { styled } from 'styled-components';

interface ITextAreaProps {
  error?: FieldError;
}

const StyledTextAreaContainer = styled.div<ITextAreaProps>`
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 0.18rem solid
      ${(props) =>
        props.error ? 'var(--color-alert-2)' : 'var(--color-grey-6)'};
    border-radius: 0.2rem;
    font-family: var(--font-family-inter);
    box-sizing: border-box;
    outline: none;
    resize: none;

    &:focus {
      border-color: ${(props) =>
        props.error ? 'var(--color-alert-1)' : 'var(--color-brand-2)'};
    }
  }
`;

export default StyledTextAreaContainer;
