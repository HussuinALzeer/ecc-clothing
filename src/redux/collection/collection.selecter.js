import { createSelector } from "reselect";

const selectShope = state => state.collections

const COLLECTION_ID_MAP = {
    hats:1,
    sneaker:2,
    jackets:3,
    womens:4,
    mens:5

}


export const selectCollection = createSelector (
    [selectShope],
    shop => shop.collections
)

export const selectCollectionForPreview  =  createSelector(
    [selectCollection],
    collections => Object.keys(collections).map(key => collections[key])
)



export const selectCollectionHate = createSelector (
    [selectCollection],
    collections => collections.mens
)

export const selectCollectionHateF = createSelector(
    [selectCollectionHate],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollectionItem = collecionUrlParam => createSelector(
    [selectCollection],
    collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[collecionUrlParam] )
)

