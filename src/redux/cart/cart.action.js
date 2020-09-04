import { CartActionTypes } from "./cart.type";

export const ToggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

//we are not using payload in cart.reducer so we don't need payload for ToggleCartHidden
export const AddItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const ClearItem = (item) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
});

// ClearItem will clear entire Item

export const RemoveItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
// RemoveItem only decrease quantity by one
