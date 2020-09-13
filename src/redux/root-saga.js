import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";

import { fetchCollectionStart } from "./shop/shop.saga";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
