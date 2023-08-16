import { styled } from 'styled-components';

const NewCarContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 8px 16px 8px;

  .carInfos__otherInfos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 20px;

    input {
      width: 100%;
    }
  }
`;

export default NewCarContainer;
