// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import { 
    START_GET_ALL_CHARACTERS, 
    SUCCESS_GET_ALL_CHARACTERS, 
    ERROR_GET_ALL_CHARACTERS,
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
    yield put({ type: SUCCESS_GET_ALL_CHARACTERS, result });
  } catch(error) {
    yield put({ type: ERROR_GET_ALL_CHARACTERS, error });
  }
}

// Create watchers
export default function * charactersSaga() {
  yield takeLatest(START_GET_ALL_CHARACTERS, getAllCharactersRequest);
}