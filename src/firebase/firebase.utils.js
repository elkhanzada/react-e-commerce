import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA_0Jhma16KZgM703meNz9uNhy56uDWWWM",
    authDomain: "ecommerce-react-data.firebaseapp.com",
    databaseURL: "https://ecommerce-react-data.firebaseio.com",
    projectId: "ecommerce-react-data",
    storageBucket: "ecommerce-react-data.appspot.com",
    messagingSenderId: "189704469507",
    appId: "1:189704469507:web:de7a1847b393be16d66236",
    measurementId: "G-FYRG8KWY1J"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;