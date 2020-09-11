import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDeifxPePTi2sDzf1DXTqQIHXNBtfFCqDc",
    authDomain: "crown-db-4dc4b.firebaseapp.com",
    databaseURL: "https://crown-db-4dc4b.firebaseio.com",
    projectId: "crown-db-4dc4b",
    storageBucket: "crown-db-4dc4b.appspot.com",
    messagingSenderId: "128131726257",
    appId: "1:128131726257:web:921c07f5bcf912dd145b90",
    measurementId: "G-Y9KMKRED8T"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log({snapShot});

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData

        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

