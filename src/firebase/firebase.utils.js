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

export const convertSnapShotToMap = (collectionSnapshot) => {
  const transformCollection = collectionSnapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  console.log(transformCollection, "transformcollection before reduce");
  return transformCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionAndDocument = async (collectionKey, ItemsToAdd) => {
  //const collectionRef = firestore.collection(collectionKey);
  //console.log(collectionRef);

  // firestore has 'batch' object
  const batch = firestore.batch();

  ItemsToAdd.forEach((item) => {
    const newItemDoc = firestore.collection(collectionKey).doc();
    batch.set(newItemDoc, item);
  });

  return await batch.commit();
};
//ItemsToAdd is actually an array of items defined in App.js
// batch.commit() is a promise
// addCollectionAndDocument function is here so that we don't need to manually enter data into firebase!!

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// MOVE SIGN IN TO SAGAS!!!

export default firebase;

// util function for isUserAuthenticate in user.sagas.js

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
