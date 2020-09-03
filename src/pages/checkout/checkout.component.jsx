import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  CartItemSelector,
  CartItemCountSelector,
  CartItemTotalSelector,
} from "../../redux/cart/cart.selectors";

import "./chekcout.styles.scss";

const CheckoutPage = ({ cartItems, total, quantity }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((item) => item.name)}
    <div className="total">TOTAL:${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: CartItemSelector,
  quantity: CartItemCountSelector,
  total: CartItemTotalSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
