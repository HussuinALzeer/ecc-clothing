import {call, put, takeEvery} from 'redux-saga/effects'
import { converCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure,fetchCollectionsSuccess } from './collection.action';

import CollectionTypes from './collection.type'


export function* fetchCollectionsAsync(){
   
    try {
        const collectionRef = firestore.collection('collections'); // created it in the firebase
        const snapshot = yield collectionRef.get()
        const collectionMap = yield call(
        converCollectionsSnapshotToMap,
        snapshot
        );
    yield put(fetchCollectionsSuccess(collectionMap))    

    } catch (error) {
    yield  put(fetchCollectionsFailure(error.message))    
    }

   
}

export function* fetchCollectionsStart(){
    yield takeEvery(CollectionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync )
}