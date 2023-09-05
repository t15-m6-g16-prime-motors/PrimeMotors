import { styled } from 'styled-components';

export const StyledCommentContainer = styled.div`
  position: relative;
  margin-top: 1.2rem;
  .form-comment-editing{
    padding:0.5rem;
  }
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
  .container-save-edit {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;

    .info-edit {
      display: none;
      font-size: 0.7rem;
    }
    .btn-edit {
      padding: 0;
      border: none;
      background: none;
      color: blue;
      font-size: 0.7rem;
    }
    .btn-edit:hover {
      text-decoration: underline;
    }
  }
  .btn-icons-container {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 0.25rem;
    .btn-show-edit {
      border: none;
      background: none;
    }
    .btn-delete {
      border: none;
      background: none;
    }
  }

  @media (min-width: 768px) {
    .container-save-edit {
      .info-edit {
        display: block;
      }
    }
  }
`;
