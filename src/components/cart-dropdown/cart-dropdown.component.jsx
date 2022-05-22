import { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartContext } from '../../providers/cart/cart.provider';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartItemsList,
  EmptyMessage,
  Button,
} from './cart-dropdown.styles';

const CartDropdown = ({ history }) => {
  const { cartItems, toggleCartHidden } = useContext(CartContext);

  const handleGoToCheckoutClick = () => {
    history.push('/checkout');
    toggleCartHidden();
  };

  return (
    <CartDropdownContainer>
      <CartItemsList>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItemsList>
      <Button onClick={handleGoToCheckoutClick}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
