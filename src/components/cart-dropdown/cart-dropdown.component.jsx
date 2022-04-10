import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartItemsList,
  EmptyMessage,
  Button,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleGoToCheckoutClick = () => {
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
      <Button onClick={handleGoToCheckoutClick}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
