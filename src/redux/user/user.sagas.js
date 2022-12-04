import { takeLatest,put,all,call } from "redux-saga/effects";

import USerActionTypes from "./user.type";

import { auth,googleProvider,createUserProfileDocument,getCurrentUser } from "../../firebase/firebase.utils";

import { googleSignInSuccess,googleSignInFailure ,emailSignInSuccess,emailSignInFailure } from "./user.action";

import { useNavigate } from "react-router-dom";


export function* SigninWithGoole() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfileDocument,user)
        const userSnapShot = yield userRef.get()
        yield put(googleSignInSuccess({id:userSnapShot.id, ...userSnapShot.data()}))

    } catch (error) {
        yield put(googleSignInFailure(error))
    }
}

export function* SigninWithEmail ({payload:{email,password}}){
    
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password)
        const userRef = yield call(createUserProfileDocument,user)
        const userSnapShot = yield userRef.get()
        yield put(emailSignInSuccess({id:userSnapShot.id, ...userSnapShot.data()}))

    } catch (error) {
       yield put(emailSignInFailure(error)) 
    }
}

export function* isUserAuthenticated(){

    try {
        
        const userAuth = yield getCurrentUser()
        
        if(!userAuth) return
        const userRef = yield call(createUserProfileDocument,userAuth)
        const userSnapShot = yield userRef.get()
        yield put(emailSignInSuccess({id:userSnapShot.id, ...userSnapShot.data()}))

    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}


export function* onGoogleSignInstart(){
    yield takeLatest(USerActionTypes.GOOGLE_SIGN_IN_START,SigninWithGoole)
}

export function* onEmailSignInStart(){
    yield takeLatest (USerActionTypes.EMAIL_SIGN_IN_START,SigninWithEmail)
}


export function* onCheckUserSession(){
    yield takeLatest(USerActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}



export function* userSage(){
    yield all([
        call(onGoogleSignInstart),call(onEmailSignInStart)
    ])
}