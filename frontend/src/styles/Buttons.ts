import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';

const genericButton = css`
  font-weight: var(--font-weight-600);
  font-size: var(--font-size-16);
  transition: 300ms;
`;

const Buttons = styled.button`
  ${genericButton}
`;

const Grey0Button = styled(Buttons)`
  background-color: var(--color-grey-scale-grey-0);
  color: var(--color-colors-fixed-white-fixed);
  &:hover {
    background-color: var(--color-grey-scale-grey-1);
  }
`;

const ButtonBrand = styled(Buttons)`
  background-color: var(--color-brand-brand-1);
  color: var(--color-colors-fixed-white-fixed);
  &:hover {
    background-color: var(--color-brand-brand-2);
  }
`;

const ButtonOutline2 = styled(Buttons)`
  border: 1.5px solid var(--color-grey-scale-grey-4);
  background-color: var(--color-colors-fixed-white-fixed);
  color: var(--color-grey-scale-grey-0);
  &:hover {
    border: none;
    background-color: var(--color-grey-scale-grey-0);
    color: var(--color-colors-fixed-white-fixed);
  }
`;

const ButtonOutlineBrand2 = styled(Buttons)`
  border: 1.5px solid var(--color-brand-brand-1);
  background-color: var(--color-colors-fixed-white-fixed);
  color: var(--color-brand-brand-1);
  &:hover {
    background-color: var(--color-brand-brand-4);
  }
`;

const ButtonLink = styled(Link)`
  ${Buttons};
  background-color: var(--color-colors-fixed-white-fixed);
  &:hover {
    background-color: var(--color-grey-scale-grey-8);
  }
`;

const ButtonAlert = styled(Buttons)`
  background-color: var(--color-feedback-alert-3);
  color: var(--color-feedback-alert-1);
  &:hover {
    background-color: var(--color-feedback-alert-2);
  }
`;

const ButtonSuccess = styled(Buttons)`
  background-color: var(--color-feedback-sucess-3);
  color: var(--color-feedback-sucess-1);
  &:hover {
    background-color: var(--color-feedback-sucess-2);
  }
`;

const ButtonDisabled = styled(Buttons)`
  background-color: var(--color-brand-brand-3);
  color: var(--color-brand-brand-4);
`;

export {
  Grey0Button,
  ButtonBrand,
  ButtonOutline2,
  ButtonOutlineBrand2,
  ButtonLink,
  ButtonAlert,
  ButtonSuccess,
  ButtonDisabled
};
