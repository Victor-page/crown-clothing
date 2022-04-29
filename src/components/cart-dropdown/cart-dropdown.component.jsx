import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartItemsList,
  EmptyMessage,
  Button,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    history.push('/checkout');

    dispatch(toggleCartHidden());
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
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
