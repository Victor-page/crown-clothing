import { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ name, imageUrl, price, quantity, id }) => {
  const { removeItem, addItem, clearItem } = useContext(CartContext);

  const removeItemHandler = () => removeItem(id);
  const addItemHandler = () => addItem({ name, imageUrl, price, quantity, id });
  const clearItemHandler = () => clearItem(id);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
