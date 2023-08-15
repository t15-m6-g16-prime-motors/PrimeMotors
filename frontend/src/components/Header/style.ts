import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  padding: 1.5rem 1rem;
  box-shadow: 0px 1px 3px var(--grey-5);
  position: fixed;
  z-index: 12;
  background-color: var(--color-grey-10);
  width: 100%;
  box-shadow: 0 -0.2rem 0.4rem var(--color-grey-1);

  display: flex;
  justify-content: center;

  .menuContainer {
    box-sizing: border-box;
    width: 100%;
    max-width: var(--content-container-limit);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      width: 46px;
      height: 100%;
      font-size: 16px;
    }
  }

  .brandContainer {
    cursor: pointer;
  }

  nav {
    width: 100%;
    padding: 24px 0 24px 0;
    display: flex;
    flex-direction: column;
    /* gap: 32px; */
  }

  .active {
    display: block;
  }

  .hidden {
    display: none;
  }

  @media (min-width: 640px) {
    padding: 1.5rem 2rem;
    .menuContainer {
      width: 100%;
      nav {
        padding: 0;
        width: 50%;
        display: flex;
        flex-direction: row;
        gap: 32px;
        justify-content: flex-end;
        .loginBtn {
          justify-content: center;
        }
      }
      button {
        display: none;
      }
    }
  }
`;
