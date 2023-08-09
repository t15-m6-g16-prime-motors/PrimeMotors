import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 1rem;
  height: 15rem;
  background-color: var(--color-grey-0);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    height: 1.5rem;
  }

  button {
    background-color: var(--color-grey-1);
    color: white;
    height: 2.8rem;
    width: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  button > svg {
    height: 70%;
    width: 70%;
  }
`;
