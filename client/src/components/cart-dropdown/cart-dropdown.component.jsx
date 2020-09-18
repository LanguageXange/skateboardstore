import React from "react";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-items/cart-items.component";
import { ToggleCartHidden } from "../../redux/cart/cart.action";

import { CartItemSelector } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// here we also want to use connect so that CartItem component have access to cartItems array in the redux store

import CustomButton from "../custom-button/custom-button.component";

const Cart = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(ToggleCartHidden());
        }}
      >
        {" "}
        Checkout
      </CustomButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: CartItemSelector,
});

export default withRouter(connect(mapStateToProps)(Cart));
// when clicking the checkout button we also want to togglehidden the drop down
// dispatch action shorthand by default connect will pass in the props.dispatch which we can access it right away
