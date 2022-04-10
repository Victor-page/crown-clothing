import styled from 'styled-components';

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const Total = styled.div`
  margin-bottom: 40px;
  padding-top: 30px;
  margin-left: auto;
  font-size: 36px;
  text-transform: uppercase;
`;

export const WarningContainer = styled.div`
  margin-bottom: 40px;
`;

export const WarningText = styled.p`
  margin: 0 0 10px 0;
  font-size: 24px;
  text-align: center;
  color: red;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
  }
`;
