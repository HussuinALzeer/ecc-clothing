import  USerActionTypes  from "./user.type"

const INITIAL_STATE={
    currentUser:null,
    error:null
}

const userReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type){
        case USerActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case USerActionTypes.EMAIL_SIGN_IN_SUCCESS:
            
            return{
                ...state,
                currentUser:action.payload,
                error:null
            }

        case USerActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case USerActionTypes.EMAIL_SIGN_IN_FAILURE:

        return{
            ...state,
            error: action.payload
        }

    
        default:
            return state
    }
}

export default userReducer;