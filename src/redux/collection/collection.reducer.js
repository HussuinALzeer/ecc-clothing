// import SHOP_DATA from "./shop.data";
import CollectionTypes from "./collection.type";


const INTIAL_STATE = {
    
    collections:null,
    isFetching: false,
    errorMessage :''
    
}


const collectionReducer = (state = INTIAL_STATE,action) =>{

    switch(action.type){

        case CollectionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching:true
            }
        
        case CollectionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload
            }

        case CollectionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }

        default:
        return state
    }
}


export default collectionReducer;