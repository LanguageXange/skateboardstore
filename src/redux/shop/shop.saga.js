import { takeEvery, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types.js";
// takeEvery creates non-blocking calls
// saga use the keyword 'put' to dispatch action

import { firestore, convertSnapShotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionSuccess, fetchCollectionFail } from "./shop.actions";

export function* fetchCollectionAsync() {
  //yield console.log("sagaaaa!!!!");

  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertSnapShotToMap, snapShot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFail(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
