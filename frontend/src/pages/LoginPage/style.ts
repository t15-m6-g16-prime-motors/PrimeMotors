import { styled } from 'styled-components';

export const StyledLoginMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 11rem 0 6rem;
  flex-grow: 1;
  background-color: var(--color-grey-8);

  color: var(--color-grey-0);

  form {
    background-color: var(--color-white-fixed);
    padding: 1rem;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 90%;
    max-width: 33rem;
    box-shadow: 0 0 0.3rem var(--color-grey-4);
  }

  form > h2 {
    padding-bottom: 1rem;
  }

  form > span {
    font-size: 0.75rem;
    color: var(--color-grey-2);
  }

  form > span.forgotPassword {
    cursor: pointer;
    width: 100%;
    text-align: end;
    margin-top: 0;
    padding-right: 0.1rem;

    transition: 0.2s;
    &:hover {
      color: var(--color-brand-2);
      font-size: 0.755rem;
    }
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
    margin-top: 2rem;

    transition: 0.2s;
    &:hover {
      opacity: 0.95;
      border-color: var(--color-brand-2);
      background-color: var(--color-brand-2);
    }
  }

  form > span.registerAccount {
    width: 100%;
    text-align: center;
    padding: 2rem;
  }

  #registerPageLink {
    width: 100%;
    padding: 0.5rem;
    border: 0.1rem solid var(--color-grey-4);
    transition: 0.2s;
  }

  @media (min-width: 640px) {
    form {
      padding: 3rem;
    }
  }
`;
