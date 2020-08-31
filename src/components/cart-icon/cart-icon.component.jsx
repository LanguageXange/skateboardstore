import React from "react";
import { connect } from "react-redux";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";
import { ToggleCartHidden } from "../../redux/cart/cart.action";

import "./cart-icon.styles.scss";

const CartItem = ({ toggleCartHidden }) => (
  <div className="cart-icon">
    <CartLogo className="shopping-icon" onClick={() => toggleCartHidden()} />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(ToggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartItem);
