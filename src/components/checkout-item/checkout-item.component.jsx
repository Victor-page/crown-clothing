import React from 'react';

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
}) => {
  const removeItemFromCart = () => removeItem(id);
  const addItemToCart = () => addItem({ name, imageUrl, price, quantity, id });
  const clearItemFromCart = () => clearItem(id);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={clearItemFromCart} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
