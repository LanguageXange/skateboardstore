import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
};
// since the initial state collections is null, make sure to update shop.selectors (ternary operator)
// also add the spinner, because data fetching is async, might be an error when data hasn't been retrieved yet

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
