import ShopActionTypes from "./shop.types";
//import { firestore, convertSnapShotToMap } from "../../firebase/firebase.utils";
// action creator is simply a function that returns an object!
// export const updateCollection = (collectionsMap) => ({
//   type: ShopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionsMap,
// });

export const fetchCollectionStartss = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionFail = (errMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: errMessage,
});

// redux thunk: write a function that returns a function
// introducing saga to replace redux thunk
// export const fetchCollectionStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionStart());
//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const collectionMap = convertSnapShotToMap(snapshot);
//         dispatch(fetchCollectionSuccess(collectionMap));
//       })
//       .catch((err) => dispatch(fetchCollectionFail(err.message)));
//   };
// };
