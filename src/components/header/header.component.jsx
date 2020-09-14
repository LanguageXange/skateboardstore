import React from "react";
import { connect } from "react-redux";
// connect is a HOC

import { ReactComponent as MyLogo } from "../../assets/skate.svg";
// this is a special syntax in React for importing SVG!!

// redux selector
import { createStructuredSelector } from "reselect";
import { CurrentUserSelector } from "../../redux/user/user.selector";
import { CartItemHiddenSelector } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
//import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { signOutStart } from "../../redux/user/user.action";

// using styled-components
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  //OptionDiv,
} from "./header.styles";
// previously we get currentUser from App.js but now we are getting it from redux
const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <MyLogo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <CartItem />
      </OptionsContainer>
      {hidden ? null : <Cart />}
    </HeaderContainer>
  );
};
// we want to hide the Cart drop down menu, implement redux in cart d
// state from  root-reducer, and from user.reducer.js we are getting the currentUser

// const mapUserStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden,
// });

// const mapUserStateToProps = (state) => ({
//   currentUser: CurrentUserSelector(state),
//   hidden: CartItemHiddenSelector(state),
// });

// use createStructuredSelector as we have more and more selectors
const mapUserStateToProps = createStructuredSelector({
  currentUser: CurrentUserSelector,
  hidden: CartItemHiddenSelector,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapUserStateToProps, mapDispatchToProps)(Header);
