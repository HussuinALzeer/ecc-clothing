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

  ///////////////////adding the user to the data base ////////////////////////////////////////////////
  export const createUserProfileDocument = async(userAuth, addtionalData) =>{
    if(!userAuth)return;


    const userRef=firestore.doc(`users/${userAuth.uid}`)

    const snapShot =await  userRef.get()

    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createAt= new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...addtionalData
        })
      }catch(error){
        console.log('error createing user',error.mssage);
      }
    }

    return userRef;
  }
  ///////////////////adding the user to the data base ////////////////////////////////////////////////


  firebase.initializeApp(app)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()


  const provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

 export default firebase;