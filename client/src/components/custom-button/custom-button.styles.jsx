import styled from 'styled-components';

const getButtonStyles = ({ isGoogleSignIn, inverted, theme: { mixins } }) =>
  isGoogleSignIn
    ? mixins.GOOGLE_SIGN_IN_BUTTON_STYLES
    : inverted
    ? mixins.INVERTED_BUTTON_STYLES
    : mixins.BUTTON_STYLES;

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
