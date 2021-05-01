// Import const
import { START_GET_ALL_RICK_AND_MORTY_CHARACTERS } from '../consts';

export const getAllCharacters = payload => ({
  type: START_GET_ALL_RICK_AND_MORTY_CHARACTERS,
  payload
});