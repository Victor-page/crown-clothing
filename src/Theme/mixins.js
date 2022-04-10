import { css } from 'styled-components';

export const BUTTON_STYLES = css`
  background-color: ${({ theme }) => theme.palette.MAIN_COLOR};
  color: #fff;
  border: 1px solid ${({ theme }) => theme.palette.MAIN_COLOR};

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.palette.MAIN_COLOR};
  }
`;

export const INVERTED_BUTTON_STYLES = css`
  background-color: #fff;
  color: ${({ theme }) => theme.palette.MAIN_COLOR};
  border: 1px solid ${({ theme }) => theme.palette.MAIN_COLOR};

  &:hover {
    background-color: ${({ theme }) => theme.palette.MAIN_COLOR};
    color: #fff;
    border: none;
  }
`;

export const GOOGLE_SIGN_IN_BUTTON_STYLES = css`
  background-color: #4285f4;
  color: #fff;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const SHRINK_LABEL_STYLES = css`
  top: -14px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.MAIN_COLOR};
`;
