import { styled } from 'styled-components';

export const StyledRegisterSuccessDiv = styled.div`
  p.subtitle {
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-grey-1);
  }

  p.description {
    color: var(--color-grey-2);
    margin-bottom: 1.25rem;
  }

  .loginLinkBtn {
    cursor: pointer;
    padding: 0.5rem;
    margin: 0 auto 1rem;
    border: 0.1rem solid var(--color-grey-3);
    border-radius: 0.3rem;
    text-align: center;
    width: max-content;

    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);
    margin-top: 2rem;

    transition: 0.2s;
    &:hover {
      opacity: 0.95;
      border-color: var(--color-brand-2);
      background-color: var(--color-brand-2);
    }
  }
`;
