import { styled } from 'styled-components';

export const StyledMain = styled.main`
  padding: 5rem 1rem 2rem;
  background-color: var(--color-grey-8);
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  form {
    background-color: var(--color-grey-10);
    padding: 2rem;
    width: 95%;
    max-width: 21rem;

    border-radius: 0.25rem;
    box-shadow: 0 0 -10px var(--color-grey-7);

    h2 {
      color: var(--color-grey-0);
      margin-bottom: 2rem;
    }

    .submitBtn {
      cursor: pointer;
      padding: 0.5rem;
      border: 0.1rem solid var(--color-grey-3);
      border-radius: 0.3rem;
      width: 100%;

      text-align: center;

      background-color: var(--color-brand-1);
      color: var(--color-white-fixed);
      margin-top: 1rem;

      transition: 0.2s;
      &:hover {
        opacity: 0.95;
        border-color: var(--color-brand-2);
        background-color: var(--color-brand-2);
      }
    }
  }

  @media (min-width: 640px) {
    padding: 9rem 1rem 2rem;
  }
  @media (min-width: 769px) {
    padding: 6rem 1rem 2rem;
  }
`;
