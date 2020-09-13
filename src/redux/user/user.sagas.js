import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.type";
import {
  auth,
  googleProvider,
  createUserProfile,
} from "../../firebase/firebase.utils";
import {
  googleSignInStart,
  googleSigninSuccess,
  googleSigninFailure,
  emailSignInStart,
  emailSigninSuccess,
  emailSigninFailure,
} from "./user.action";

// ALSO UPDATE THE FIREBASE.UTILS.JS FILE
// ANY CODE THAT CALLS API COULD FAIL SO REMEMBER TO PUT IT INSIDE TRY CATCH BLOCK

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    //console.log(userRef.user);
    const userRef = yield call(createUserProfile, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (err) {
    yield put(googleSigninFailure(err.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
