import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  padding: 1rem;
  box-shadow: 0px 1px 3px var(--grey-5);

  .menuContainer {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menuBtn {
    background-color: white;
    height: 100%;
  }

  .loginResgiterContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0.8rem 0 0;
  }

  .loginResgiterContainer > p {
    margin-bottom: 0.5rem;
  }

  .loginResgiterContainer > p:hover {
    color: var(--brand-1);
    cursor: pointer;
  }

  .loginResgiterContainer > button {
    width: 100%;
    box-sizing: border-box;
  }

  .hidden {
    display: none;
  }
`;
