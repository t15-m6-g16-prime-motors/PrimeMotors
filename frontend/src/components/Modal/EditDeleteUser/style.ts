import { styled } from 'styled-components';

const EditUserContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px 16px 8px;
  max-height: 80vh;
  overflow-y: auto;

  .buttons__container {
    display: flex;
    width: 100%;
    gap: 16px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    :nth-child(1),
    :nth-child(2) {
      width: 47%;
    }
    :nth-child(3) {
      width: 75%;
    }
  }

  @media (min-width: 527px) {
    .buttons__container {
      :nth-child(1),
      :nth-child(2),
      :nth-child(3) {
        max-width: 31%;
      }
    }
  }
`;

export default EditUserContainer;
