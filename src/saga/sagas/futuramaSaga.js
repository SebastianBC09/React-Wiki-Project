// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import { 
  START_GET_ALL_FUTURAMA_CHARACTERS, 
  SUCCESS_GET_ALL_FUTURAMA_CHARACTERS, 
  ERROR_GET_ALL_FUTURAMA_CHARACTERS,
  START_GET_FUTURAMA_CHARACTERS_BY_NAME,
  SUCCESS_GET_FUTURAMA_CHARACTERS_BY_NAME,
  ERROR_GET_FUTURAMA_CHARACTERS_BY_NAME
} from '../../redux/consts';

// Import fetch API function
import apiCall from '../api';

// BaseURL
const baseURL = `https://futuramaapi.herokuapp.com/api/v2`;

// Do api request with Saga
export function * getAllCharactersRequest() {
  // Do request
  try {
    const result = yield call(apiCall, `${baseURL}/characters`, 'GET');
    yield put({ type: SUCCESS_GET_ALL_FUTURAMA_CHARACTERS, result });
  } catch(error) {
    yield put({ type: ERROR_GET_ALL_FUTURAMA_CHARACTERS, error });
  }
}

// Do api request with Saga
export function * getCharactersByNameRequest({ payload }) {
  const { characterName } = payload;

  // Do request
  try {
    const result = yield call(apiCall, `${baseURL}/characters?search=${characterName}`, 'GET');
    yield put({ type: SUCCESS_GET_FUTURAMA_CHARACTERS_BY_NAME, result });
  } catch(error) {
    yield put({ type: ERROR_GET_FUTURAMA_CHARACTERS_BY_NAME, error });
  }
}

// Create watchers
export default function * futuramaSaga() {
  yield takeLatest(START_GET_ALL_FUTURAMA_CHARACTERS, getAllCharactersRequest);
  yield takeLatest(START_GET_FUTURAMA_CHARACTERS_BY_NAME, getCharactersByNameRequest);
}