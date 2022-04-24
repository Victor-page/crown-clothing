import { takeLatest, call, put, all } from 'redux-saga/effects';
import { collection, query, getDocs } from 'firebase/firestore';

import { FETCH_COLLECTIONS_START } from './shop.types';
import {
  db,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

function* fetchCollectionsAsync() {
  try {
    const q = query(collection(db, 'collections'));
    const querySnapshot = yield getDocs(q);
    const { docs } = querySnapshot;
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, docs);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch ({ message }) {
    yield put(fetchCollectionsFailure(message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export default function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
