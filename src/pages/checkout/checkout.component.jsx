import React from 'react';

import { default as CheckoutItem } from '../../components/checkout-item/checkout-item.container';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal: total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
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
    <div className="total">Total : ${total}</div>
    <div className="test-warning">
      <p>*Please use the following test credit card for payments*</p>
      <p>4242 4242 4242 4242 - Exp: 12/34 - CVV: 123</p>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

export default CheckoutPage;
