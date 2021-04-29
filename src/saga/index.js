// Import libraries
import { all } from 'redux-saga/effects';

// Import sagas
import charactersSaga from './sagas/charactersSaga';

// Add watchers
export default function * rootSaga() {
  yield all([
    charactersSaga(),
  ]);
}