import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckout from '../../components/stripe-checkout/stripe-checkout.component';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const areCartItems = Boolean(cartItems.length);

  return (
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
      {areCartItems && <StripeCheckout />}
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
