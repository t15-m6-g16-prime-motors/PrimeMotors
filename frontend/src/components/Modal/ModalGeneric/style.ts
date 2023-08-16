import { styled } from 'styled-components';

const ModalContainer = styled.section`
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; // don´t change

  .modalBody {
    max-width: 33rem;
    max-height: fit-content;
    min-height: 16rem;
    width: 100%;
    background-color: var(--color-white-fixed);
    border-radius: 8px;
    padding: 0 16px 0 16px;
  }
  
  .modalHeader {
    background-color: var(--color-white-fixed);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 16px 0;
    border-radius: 8px 8px 0 0;

    button {
      background-color: transparent;
      border: none;
      color: var(--color-grey-4);
      font-size: 16px;
      padding: 10px;
    }
  }
`;
export default ModalContainer;
