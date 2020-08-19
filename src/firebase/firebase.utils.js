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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

// create a function called signInWithGoogle
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
