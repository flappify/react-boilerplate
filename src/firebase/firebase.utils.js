import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
const config ={
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
