import React from "react";
import { connect } from "react-redux";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";
import { ToggleCartHidden } from "../../redux/cart/cart.action";

import { CartItemCountSelector } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import "./cart-icon.styles.scss";

const CartItem = ({ toggleCartHidden, itemQuantity }) => (
  <div className="cart-icon">
    <CartLogo className="shopping-icon" onClick={() => toggleCartHidden()} />
    <span className="item-count">{itemQuantity}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemQuantity: CartItemCountSelector,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

// Review Selectors in Redux Course
// essentially mapStateToProps will be called every time the reducer is called
// and the state always return a new object
// which is a performance issue!!!
// so we need memoization and the reselect library
// will not re-render a component if the state value doesn't change
