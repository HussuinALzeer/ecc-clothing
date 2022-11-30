import CollectionTypes from "./collection.type";

export const UpdateCollections =  (collectionMap) =>({
    type:CollectionTypes.UPDATE_COLLECTIONS,
    payload:collectionMap
})