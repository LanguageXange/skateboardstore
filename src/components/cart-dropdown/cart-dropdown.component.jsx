import React from "react";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-items/cart-items.component";
import { CartItemSelector } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
// here we also want to use connect so that CartItem component have access to cartItems array in the redux store

import CustomButton from "../custom-button/custom-button.component";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <CustomButton> Checkout</CustomButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: CartItemSelector,
});

export default connect(mapStateToProps)(Cart);
