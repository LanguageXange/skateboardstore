import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { ClearItem, RemoveItem, AddItem } from "../../redux/cart/cart.action";

const CheckOutItem = ({ checkoutItem, clearItem, removeItem, addItem }) => {
  const { imageUrl, price, name, quantity } = checkoutItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>

      <span className="quantity">
        <div className="arrow left" onClick={() => removeItem(checkoutItem)}>
          {" "}
          &#9664;
        </div>
        <span className="value"> {quantity}</span>

        <div className="arrow right" onClick={() => addItem(checkoutItem)}>
          {" "}
          &#9654;
        </div>
      </span>

      <div className="remove-button" onClick={() => clearItem(checkoutItem)}>
        {" "}
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItem(item)),
  removeItem: (item) => dispatch(RemoveItem(item)),
  addItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);

// the reason why we passing entier checkoutItem object is that
// we will be able to increase/decrease quantity later on
