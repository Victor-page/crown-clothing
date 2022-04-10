import styled from 'styled-components';

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.palette.SUB_COLOR};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink, theme }) => shrink && theme.mixins.SHRINK_LABEL_STYLES}
`;

export const Input = styled.input`
  background: none;
  background-color: #fff;
  color: ${({ theme }) => theme.palette.SUB_COLOR};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.SUB_COLOR};
  margin: 25px 0;

  &[type='password'] {
    letter-spacing: 0.3em;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${({ theme }) => theme.mixins.SHRINK_LABEL_STYLES}
  }
`;
