import SHOP_DATA from "./shop.data";
import CollectionTypes from "./collection.type";


const INTIAL_STATE = {
    
    collections:SHOP_DATA
    
}


const collectionReducer = (state = INTIAL_STATE,action) =>{

    switch(action.type){

        case CollectionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections:action.payload
            }

        default:
        return state
    }
}


export default collectionReducer;