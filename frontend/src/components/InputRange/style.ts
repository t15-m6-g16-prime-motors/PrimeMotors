import { styled } from 'styled-components';

export const StyledDivInputRange = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: 30px;
  .title {
    font-size: var(--font-size-28);
    font-family: var(--font-family-lexend);
    font-weight: var(--font-weight-600);

    margin-bottom: 0.7rem;
    color: var(--color-grey-0);
  }
  .values {
    display: flex;
    justify-content: space-between;
  }
  input[type='range'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    position: absolute;
    margin: auto;
    top: 60px;
    bottom: 0;
    background-color: transparent;
    pointer-events: none;
  }
  .slider-track {
    width: 100%;
    height: 5px;
    position: absolute;
    margin: auto;
    top: 60px;
    bottom: 0;
    border-radius: 5px;
  }
  input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 5px;
  }
  input[type='range']::-moz-range-track {
    -moz-appearance: none;
    height: 5px;
  }
  input[type='range']::-ms-track {
    appearance: none;
    height: 5px;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.7em;
    width: 1.7em;
    background-color: var(--color-brand-1);
    cursor: pointer;
    margin-top: -9px;
    pointer-events: auto;
    border-radius: 50%;
  }

  input[type='range']::-ms-thumb {
    appearance: none;
    height: 1.7em;
    width: 1.7em;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--color-brand-1);

    pointer-events: auto;
  }
  input[type='range']:active::-webkit-slider-thumb {
    background-color: #ffffff;
    border: 3px solid var(--color-brand-1);
  }
`;
