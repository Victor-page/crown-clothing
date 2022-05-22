import { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import StripeCheckoutButton from '../stripe-button/stripe-button.component';

import { WarningContainer, WarningText } from './stripe-checkout.styles';

const StripeCheckout = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <>
      <WarningContainer>
        <WarningText>
          *Please use the following test credit card for payments*
        </WarningText>
        <WarningText>4242 4242 4242 4242 - Exp: 12/34 - CVV: 123</WarningText>
      </WarningContainer>
      <StripeCheckoutButton price={totalPrice} />
    </>
  );
};

export default StripeCheckout;
