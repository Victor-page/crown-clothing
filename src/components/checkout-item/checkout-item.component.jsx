import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

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
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem(id)}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div
        className="arrow"
        onClick={() => addItem({ name, imageUrl, price, quantity, id })}
      >
        &#10095;
      </div>
    </span>
    <span className="price">{price}</span>
    <div onClick={() => clearItem(id)} className="remove-button">
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (id) => dispatch(clearItemFromCart(id)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
