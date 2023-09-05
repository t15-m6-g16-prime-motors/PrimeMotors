import { styled } from 'styled-components';

const EditDeleteCarContainer = styled.section`
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

  .rowContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .no,
  .yes {
    cursor: pointer;
    padding: 0.7rem;
    border: 0.122rem solid var(--color-grey-3);
    border-radius: 0.3rem;
    width: 50%;
    margin-bottom: 1rem;

    text-align: center;
  }

  .yes:hover,
  .no:hover {
    opacity: 0.9;
    border-color: var(--color-brand-1);
  }

  .active {
    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);
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
        width: 55%;
      }

      button:nth-child(2) {
        width: 45%;
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

export default EditDeleteCarContainer;
