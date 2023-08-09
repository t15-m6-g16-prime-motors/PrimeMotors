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
  background-color: var(--color-grey-0);
  color: var(--color-white-fixed);
  &:hover {
    background-color: var(--color-grey-1);
  }
`;

const ButtonBrand = styled(Buttons)`
  background-color: var(--color-brand-1);
  color: var(--color-white-fixed);
  &:hover {
    background-color: var(--color-brand-2);
  }
`;

const ButtonOutline2 = styled(Buttons)`
  border: 1.5px solid var(--color-grey-4);
  background-color: var(--color-white-fixed);
  color: var(--color-grey-0);
  &:hover {
    border: 1.5px solid var(--color-grey-0);
    background-color: var(--color-grey-0);
    color: var(--color-white-fixed);
  }
`;

const ButtonOutlineBrand2 = styled(Buttons)`
  border: 1.5px solid var(--color-brand-1);
  background-color: var(--color-white-fixed);
  color: var(--color-brand-1);
  &:hover {
    background-color: var(--color-brand-4);
  }
`;

const LinkStyled = styled(Link)`
  width: 100%;
  background-color: var(--color-white-fixed);
  color: var(--color-grey-0);
  font-family: var(--font-family-inter);
  border-radius: 4px;
  font-weight: var(--font-weight-600);
  font-size: var(--font-size-16);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
`;

const LinkStyledToLogin = styled(LinkStyled)`
  justify-content: start;
  &:hover {
    background-color: var(--color-grey-8);
  }
`;

const LinkStyledToRegister = styled(LinkStyled)`
  border: 1.5px solid var(--color-grey-4);
  background-color: var(--color-white-fixed);
  color: var(--color-grey-0);
  &:hover {
    border: 1.5px solid var(--color-grey-0);
    background-color: var(--color-grey-0);
    color: var(--color-white-fixed);
  }
`;

const ButtonAlert = styled(Buttons)`
  background-color: var(--color-alert-3);
  color: var(--color-alert-1);
  &:hover {
    background-color: var(--color-alert-2);
  }
`;

const ButtonSuccess = styled(Buttons)`
  background-color: var(--color-sucess-3);
  color: var(--color-sucess-1);
  &:hover {
    background-color: var(--color-sucess-2);
  }
`;

const ButtonDisabled = styled(Buttons)`
  background-color: var(--color-brand-3);
  color: var(--color-brand-4);
`;

export {
  Grey0Button,
  ButtonBrand,
  ButtonOutline2,
  ButtonOutlineBrand2,
  LinkStyledToLogin,
  LinkStyledToRegister,
  ButtonAlert,
  ButtonSuccess,
  ButtonDisabled
};
