import styled from 'styled-components';

import * as palette from './variables.js';
import * as mixins from './mixins';

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const Label = styled.label`
  color: ${palette.SUB_COLOR};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && mixins.shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: #fff;
  color: ${palette.SUB_COLOR};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${palette.SUB_COLOR};
  margin: 25px 0;

  &[type='password'] {
    letter-spacing: 0.3em;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${mixins.shrinkLabelStyles}
  }
`;
