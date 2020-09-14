import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.type";
import {
  auth,
  googleProvider,
  createUserProfile,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  SigninSuccess,
  SigninFailure,
  signOutFailure,
  signOutSuccess,
} from "./user.action";

// ALSO UPDATE THE FIREBASE.UTILS.JS FILE
// ANY CODE THAT CALLS API COULD FAIL SO REMEMBER TO PUT IT INSIDE TRY CATCH BLOCK

export function* getSnapshotFromUser(userAuth) {
  try {
    const userRef = yield call(createUserProfile, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(SigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(SigninFailure(err.message));
  }
}

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUser(user);
  } catch (err) {
    yield put(SigninFailure(err.message));
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUser(user);
  } catch (err) {
    yield put(SigninFailure(err.message));
  }
}

export function* isUserAuthenticate() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUser(userAuth);
  } catch (err) {
    yield put(SigninFailure(err));
  }
}

export function* isUserSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticate);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, isUserSignOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onCheckUserSession),
  ]);
}
