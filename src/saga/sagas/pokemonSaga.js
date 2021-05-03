// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import { 
  START_GET_ALL_POKEMONS, 
  SUCCESS_GET_ALL_POKEMONS, 
  ERROR_GET_ALL_POKEMONS,
  START_GET_POKEMON_BY_ID,
  SUCCESS_GET_POKEMON_BY_ID,
  ERROR_GET_POKEMON_BY_ID
} from '../../redux/consts';

// Import fetch API function
import apiCall from '../api';

// BaseURL
const baseURL = `https://pokeapi.co/api/v2`;

// Do api request with Saga
export function * getAllPokemonsRequest() {
  // Do request
  try {
    const result = yield call(apiCall, `${baseURL}/pokemon`, 'GET');
    yield put({ type: SUCCESS_GET_ALL_POKEMONS, result });
  } catch(error) {
    yield put({ type: ERROR_GET_ALL_POKEMONS, error });
  }
}

// Do api request with Saga
export function * getPokemonByIdRequest({ payload }) {
  const { pokemonId } = payload;

  // Do request
  try {
    const result = yield call(apiCall, `${baseURL}/pokemon/${pokemonId}`, 'GET');
    yield put({ type: SUCCESS_GET_POKEMON_BY_ID, result });
  } catch(error) {
    yield put({ type: ERROR_GET_POKEMON_BY_ID, error });
  }
}

// Create watchers
export default function * pokemonSaga() {
  yield takeLatest(START_GET_ALL_POKEMONS, getAllPokemonsRequest);
  yield takeLatest(START_GET_POKEMON_BY_ID, getPokemonByIdRequest);
}