import { CartActionTypes } from "./cart.type";

export const ToggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const AddItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

//we are not using payload in cart.reducer so we don't need payload for ToggleCartHidden
