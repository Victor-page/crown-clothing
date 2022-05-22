import { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { toggleCartHidden, cartItemsCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
