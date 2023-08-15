import { styled } from 'styled-components';

export const StyledRegisterMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8rem 0 2rem;
  background-color: var(--color-grey-8);

  color: var(--color-grey-0);

  form {
    background-color: var(--color-white-fixed);
    padding: 1rem;
    border-radius: 0.25rem;
  }

  h4 {
    margin-top: 2rem;
  }

  .rowContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .buyer,
  .seller {
    cursor: pointer;
    padding: 0.7rem;
    border: 0.15rem solid var(--color-grey-3);
    border-radius: 0.3rem;
    width: 50%;
    margin-bottom: 1rem;

    text-align: center;
  }

  .buyer:hover,
  .seller:hover,
  .submitBtn:hover {
    opacity: 0.9;
    border-color: var(--color-brand-1);
  }

  .active {
    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);
  }

  .submitBtn {
    cursor: pointer;
    padding: 0.7rem;
    border: 0.15rem solid var(--color-grey-3);
    border-radius: 0.3rem;
    width: 100%;

    text-align: center;

    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);
    margin-top: 2rem;
  }
`;
