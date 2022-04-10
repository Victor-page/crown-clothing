import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  WarningContainer,
  WarningText,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map(({ name, imageUrl, price, quantity, id }) => (
      <CheckoutItem
        key={id}
        name={name}
        imageUrl={imageUrl}
        price={price}
        quantity={quantity}
        id={id}
      />
    ))}
    <Total>Total: ${total}</Total>
    <WarningContainer>
      <WarningText>
        *Please use the following test credit card for payments*
      </WarningText>
      <WarningText>4242 4242 4242 4242 - Exp: 12/34 - CVV: 123</WarningText>
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
