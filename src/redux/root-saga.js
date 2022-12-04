import {all, call} from 'redux-saga/effects'; 

import { fetchCollectionsStart } from './collection/collection.sages';
import { userSage } from './user/user.sagas';

export default function* rootSage(){
    yield all([
        call(fetchCollectionsStart),call(userSage)
    ])
};