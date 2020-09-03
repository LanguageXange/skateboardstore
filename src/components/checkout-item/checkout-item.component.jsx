import React from "react";
import "./checkout-item.styles.scss";

const CheckOutItem = ({
  checkoutItem: { imageUrl, price, name, quantity },
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="price">${price}</span>
    <span className="quantity">{quantity}</span>

    <div className="remove-button"> &#10005;</div>
  </div>
);

export default CheckOutItem;

// the reason why we passing entier checkoutItem object is that
// we will be able to increase/decrease quantity later on
