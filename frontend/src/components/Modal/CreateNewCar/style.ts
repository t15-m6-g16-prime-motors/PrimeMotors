import { styled } from 'styled-components';

const NewCarContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px 16px 8px;
  max-height: 45rem;
  overflow-y: scroll;

  .carInfos__otherInfos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 20px;

    input {
      width: 100%;
      color: var(--color-grey-3);
    }
  }

  .carButtons {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .carButtons__addImg {
      button {
        height: 2.375rem;
        width: 70%;
      }
    }
    .carButtons__deleteSave {
      display: flex;
      gap: 10px;
      width: 100%;
      justify-content: flex-end;
      align-items: center;

      button:first-child {
        width: 30%;
      }

      button:nth-child(2) {
        width: 40%;
      }
    }
  }

  .imagesLinkInputs {
    .imagesLinkInputs__extraInput {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button__deleteInput {
      background-color: transparent;
      position: relative;
      top: 6px;
      cursor: pointer;
      transition: 200ms;

      &:hover {
        scale: 130%;
      }
    }
  }
`;

export default NewCarContainer;
