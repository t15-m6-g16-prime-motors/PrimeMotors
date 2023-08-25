import { styled } from 'styled-components';

const EditAddressContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px 16px 8px;
  max-height: 45rem;
  overflow-y: auto;

  .rowContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .buttons__container {
    display: flex;
    width: 100%;
    gap: 16px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default EditAddressContainer;
