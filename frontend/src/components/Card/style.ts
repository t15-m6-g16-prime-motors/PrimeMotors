import { styled } from 'styled-components';

export const StyledCardContainer = styled.li`
  min-width: 14rem;
  .imageContainer {
    background-color: var(--color-grey-7);
    max-width: 100%;
    max-height: 15rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imageContainer img {
    height: 100%;
    max-width: 100%;
  }

  .title {
    margin: 1rem 0;
    color: var(--color-grey-1);
  }

  .description {
    color: var(--color-grey-2);
    height: 3rem;
    width: 100%;
    text-align: justify;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .profile {
    margin: 1rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }

  .profile > div {
    padding: 0.4rem;
    border-radius: 50%;
    color: var(--color-white-fixed);
    background-color: var(--color-random-2);
    font-size: 0.8rem;
  }

  .profile > .name {
    color: var(--color-grey-2);
  }

  .carInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .tagsContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }

  .tag {
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);
    padding: 0.3rem;
    border-radius: 0.25rem;
  }

  .price {
    color: var(--color-grey-1);
  }

  @media (min-width: 768px) {
    .carInfo {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0;
    }
  }
`;
