import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'



const app= {
    apiKey: "AIzaSyDYnkiEMef9vjoJ3jXPP1lNh1ONw7I1_So",
    authDomain: "crown-daa31.firebaseapp.com",
    projectId: "crown-daa31",
    storageBucket: "crown-daa31.appspot.com",
    messagingSenderId: "612013302250",
    appId: "1:612013302250:web:4440b3b72779862429d293",
    measurementId: "G-PXWC32WRV2"
  };

  firebase.initializeApp(app)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()


  const provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

 export default firebase;