// import { converCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import CollectionTypes from "./collection.type";



export const FetchCollectionsStart =  () =>({
    type:CollectionTypes.FETCH_COLLECTIONS_START
})


export const fetchCollectionsSuccess = collectionMap => ({
    type:CollectionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionMap
})

export const fetchCollectionsFailure = (errorMessage)=>({
    type:CollectionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

// export const fetchCollectionsStartAsync = () =>{
//     return dispatch =>{
//         const collectionRef = firestore.collection('collections'); // created it in the firebase

//         dispatch(FetchCollectionsStart())

//         collectionRef.get().then( Snapshot =>{
//           const collectonsMap = converCollectionsSnapshotToMap(Snapshot);

//         dispatch(fetchCollectionsSuccess(collectonsMap))
//         }).catch(error =>{
//             dispatch(fetchCollectionsFailure(error.message))
//         })
//     }
// }