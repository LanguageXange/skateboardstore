import { createSelector } from "reselect";

const CartSelector = (state) => state.cart;

export const CartItemSelector = createSelector(
  [CartSelector],
  (cart) => cart.cartItems
);
export const CartItemHiddenSelector = createSelector(
  CartSelector,
  (cart) => cart.hidden
);

export const CartItemCountSelector = createSelector(
  [CartItemSelector],
  (cartItems) => cartItems.reduce((sum, cv) => sum + cv.quantity, 0)
);

export const CartItemTotalSelector = createSelector(
  [CartItemSelector],
  (cartItems) => cartItems.reduce((sum, cv) => sum + cv.quantity * cv.price, 0)
);
