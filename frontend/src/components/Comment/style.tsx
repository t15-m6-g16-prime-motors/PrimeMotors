import { styled } from 'styled-components';

export const StyledCommentContainer = styled.div`
  margin-top: 1.2rem;
  .profileHeader {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    .initials {
      background-color: var(--color-brand-1);
      padding: 0.4rem;
      border-radius: 50%;
      color: var(--color-white-fixed);
      font-size: 0.8rem;
      font-weight: 400;
    }

    svg,
    span {
      color: var(--color-grey-3);
    }
  }

  .commentText {
    color: var(--color-grey-2);
    text-align: justify;
    padding: 0.5rem;
  }
`;
