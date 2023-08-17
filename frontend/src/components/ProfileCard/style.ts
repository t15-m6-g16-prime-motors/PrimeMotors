import { styled } from 'styled-components';

export const StyledProfileCardContainer = styled.li`
  min-width: 14rem;
  .imageContainer {
    background-color: var(--color-grey-7);
    max-width: 100%;
    max-height: 15rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }

  .imageContainer img {
    height: 100%;
    max-width: 100%;
  }

  .imageContainer > div {
    padding: 0rem 0.3rem;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    color: var(--color-white-fixed);
    border-radius: 0.1rem;
  }

  .imageContainer > div.activeTag {
    background-color: var(--color-brand-1);
  }
  .imageContainer > div.inactiveTag {
    background-color: var(--color-grey-4);
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
    margin-top: 1rem;
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

  .buttonsContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .buttonsContainer > button {
    padding: 0.5rem;
    color: var(--color-grey-1);
    border: 0.15rem solid var(--color-grey-1);
    border-radius: 0.5rem;
    font-family: (--font-family-inter);
    font-size: 0.8rem;
    font-weight: 700;

    transition: 0.15s;

    &:hover {
      background-color: var(--color-grey-1);
      color: var(--color-white-fixed);
      border-color: var(--color-white-fixed);
    }
    &:focus {
      opacity: 0.6;
    }
  }

  @media (min-width: 1100px) {
    .carInfo {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0;
    }
  }
`;
