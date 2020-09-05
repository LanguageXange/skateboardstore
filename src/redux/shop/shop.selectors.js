import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

const shopCollectionSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);
export default shopCollectionSelector;
