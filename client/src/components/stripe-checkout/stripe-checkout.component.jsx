import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../redux/cart/cart.selectors';

// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import PaymentForm from '../payment-form/payment-form.component';

import { WarningContainer, WarningText } from './stripe-checkout.styles';

const StripeCheckout = () => {
  const total = useSelector(selectCartTotal);

  return (
    <>
      <WarningContainer>
        <WarningText>
          *Please use the following test credit card for payments*
        </WarningText>
        <WarningText>4242 4242 4242 4242 - Exp: 12/34 - CVV: 123</WarningText>
      </WarningContainer>
      {/* <StripeCheckoutButton price={total} /> */}
      <PaymentForm />
    </>
  );
};

export default StripeCheckout;
