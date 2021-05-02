// Import libraries
import { all } from 'redux-saga/effects';

// Import sagas
import rickAndMortySaga from './sagas/rickAndMortySaga';
import futuramaSaga from './sagas/futuramaSaga';
import pokemonSaga from './sagas/pokemonSaga';

// Add watchers
export default function * rootSaga() {
  yield all([
    rickAndMortySaga(),
    futuramaSaga(),
    pokemonSaga()
  ]);
}