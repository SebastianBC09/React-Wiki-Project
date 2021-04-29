// Import const
import { START_GET_ALL_CHARACTERS } from '../consts';

export const getAllCharacters = payload => ({
  type: START_GET_ALL_CHARACTERS,
  payload
});