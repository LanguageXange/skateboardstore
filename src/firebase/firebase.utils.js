import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCmoEtoJeTfSDY8BHbGTiVfD1NMOILvcr0",
  authDomain: "my-project-2019-1560131465554.firebaseapp.com",
  databaseURL: "https://my-project-2019-1560131465554.firebaseio.com",
  projectId: "my-project-2019-1560131465554",
  storageBucket: "my-project-2019-1560131465554.appspot.com",
  messagingSenderId: "1026039295707",
  appId: "1:1026039295707:web:191268e7a65c15948426fe",
  measurementId: "G-C9Y3D7ZSCR",
};

// async await
// QueryReference: CRUD method, doesn't have the actual data, just referencing the place it hold the data
// QuerySnapshot: represents actual data

//-------------------------------//
// firebase now has realtime database & firestore, what's the differences?
firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
