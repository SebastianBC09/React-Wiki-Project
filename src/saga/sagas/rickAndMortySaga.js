// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import { 
  START_GET_ALL_RICK_AND_MORTY_CHARACTERS, 
  SUCCESS_GET_ALL_RICK_AND_MORTY_CHARACTERS, 
  ERROR_GET_ALL_RICK_AND_MORTY_CHARACTERS,
} from '../../redux/consts';

// Import fetch API function
import apiCall from '../api';

// BaseURL
const baseURL = `https://rickandmortyapi.com/api`;

// Do api request with Saga
export function * getAllCharactersRequest() {
  // Do request
  try {
    const result = yield call(apiCall, `${baseURL}/character`, 'GET');
    yield put({ type: SUCCESS_GET_ALL_RICK_AND_MORTY_CHARACTERS, result });
  } catch(error) {
    yield put({ type: ERROR_GET_ALL_RICK_AND_MORTY_CHARACTERS, error });
  }
}

// Create watchers
export default function * rickAndMortySaga() {
  yield takeLatest(START_GET_ALL_RICK_AND_MORTY_CHARACTERS, getAllCharactersRequest);
}