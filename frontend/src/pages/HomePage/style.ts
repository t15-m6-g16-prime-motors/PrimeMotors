import { styled } from 'styled-components';
import carSvg from '../../utils/images/bmw.svg';

export const StyledMain = styled.main`
  .welcomeBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40rem;
    padding: 1rem;
    position: relative;
    overflow: hidden;
    color: var(--color-grey-10);
    /* background-image: url(${carSvg}); */
    background-image: url('https://images.pexels.com/photos/12960633/pexels-photo-12960633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    background-position: 53% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  .welcomeBox:after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 8;
    background: -moz-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 40%,
      #000 100%
    );
    background: -webkit-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 40%,
      #000 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 40%,
      #000 100%
    );
  }

  .welcomeBox h1 {
    margin-bottom: 2rem;
  }
  .welcomeBox p {
    text-align: center;
  }
`;
