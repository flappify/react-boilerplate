import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
const config ={
    apiKey: "AIzaSyBMNQ0EsNfS0b2H9cPvsOu713FGtFhvbD0",
    authDomain: "flappify-6a844.firebaseapp.com",
    databaseURL: "https://flappify-6a844.firebaseio.com",
    projectId: "flappify-6a844",
    storageBucket: "flappify-6a844.appspot.com",
    messagingSenderId: "154091819423",
    appId: "1:154091819423:web:d4adc2911b9be72d276daa"
  };
  firebase.initializeApp(config);
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
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
          adminStatus:false,
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };
  export const auth = firebase.auth();
  export const firestore= firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();//enable google-signin pop-up
  provider.setCustomParameters({promt:'selected_account'});
  export const signInWithGoogle= () => auth.signInWithPopup(provider);
  export default firebase;