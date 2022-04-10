import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: ${({ theme }) => theme.palette.MAIN_COLOR};
  color: #fff;
  border: 1px solid ${({ theme }) => theme.palette.MAIN_COLOR};

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.palette.MAIN_COLOR};
  }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  color: ${({ theme }) => theme.palette.MAIN_COLOR};
  border: 1px solid ${({ theme }) => theme.palette.MAIN_COLOR};

  &:hover {
    background-color: ${({ theme }) => theme.palette.MAIN_COLOR};
    color: #fff;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }) =>
  isGoogleSignIn
    ? googleSignInStyles
    : inverted
    ? invertedButtonStyles
    : buttonStyles;

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  min-height: 50px;
  display: flex;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}
`;
