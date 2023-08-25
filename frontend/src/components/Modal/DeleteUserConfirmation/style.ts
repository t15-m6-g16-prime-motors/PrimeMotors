import { styled } from 'styled-components';

const DeleteUserContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 8px 16px 8px;
  max-height: 45rem;

  span {
    color: var(--color-alert-1);
    font-weight: bold;
  }

  .buttons__container {
    gap: 16px;
    display: flex;
    flex-direction: row;
    align-items: end;
  }
`;

export default DeleteUserContainer;
