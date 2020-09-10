import ShopActionTypes from "./shop.types";

// action creator is simply a function that returns an object!
export const updateCollection = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
