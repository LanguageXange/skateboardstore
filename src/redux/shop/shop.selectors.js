import { createSelector } from "reselect";
import memoize from "lodash.memoize";
// const COLLECTION_ID_MAP = {
//   skateboard: 1,
//   longboard: 2,
//   cruiser: 3,
//   downhill: 4,
//   outfit: 5,
// };

// for our collection category routing we need to map id to the collection string

const shopSelector = (state) => state.shop;

export const shopCollectionSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

// since we've modified the shop.data.js to an object instead of an array
// we need a new selector called CollectionPreviewSelector

const CollectionPreviewSelector = createSelector(
  [shopCollectionSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export default CollectionPreviewSelector;

// export const cateCollectionSelector = (collectionUrlParam) =>
//   createSelector([shopCollectionSelector], (collections) =>
//     collections.find(
//       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   );
export const cateCollectionSelector = memoize((collectionUrlParam) =>
  createSelector(
    [shopCollectionSelector],

    (collections) => (collections ? collections[collectionUrlParam] : null)
  )
);

// use memoize from lodash utility library
