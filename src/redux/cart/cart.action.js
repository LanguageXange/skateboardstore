import { CartActionTypes } from "./cart.type";

export const ToggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

//we are not using payload in reducer so we don't need payload here
