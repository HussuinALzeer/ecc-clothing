import  USerActionTypes  from "./user.type"

export const setCurrentUser = user => ({
    type: USerActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = ()=>({
    type:USerActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = user=>({
    type: USerActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
})

export const googleSignInFailure = error =>({
    type: USerActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload:error
})


export const emailSignInStart = (EmailandPassword)=>({
    type:USerActionTypes.EMAIL_SIGN_IN_START,
    payload:EmailandPassword
});

export const emailSignInSuccess = (user)=>({
    type: USerActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload:user
})

export const emailSignInFailure = (error) =>({
    type: USerActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload:error
})

export const  checkUserSession = () =>({
    type:USerActionTypes.SET_CURRENT_USER
})