import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

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

const CheckoutItem = ({
  name,
  imageUrl,
  price,
  quantity,
  id,
  clearItem,
  addItem,
  removeItem,
}) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <Image src={imageUrl} alt={name} />
    </ImageContainer>
    <Name>{name}</Name>
    <Quantity>
      <Arrow onClick={() => removeItem(id)}>&#10094;</Arrow>
      <Value>{quantity}</Value>
      <Arrow onClick={() => addItem({ name, imageUrl, price, quantity, id })}>
        &#10095;
      </Arrow>
    </Quantity>
    <Price>{price}</Price>
    <RemoveButton onClick={() => clearItem(id)}>&#10005;</RemoveButton>
  </CheckoutItemContainer>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (id) => dispatch(clearItemFromCart(id)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
