// Import const
import { START_GET_ALL_RICK_AND_MORTY_CHARACTERS, START_GET_RICK_AND_MORTY_CHARACTER_BY_ID } from '../consts';

export const getAllCharacters = payload => ({
  type: START_GET_ALL_RICK_AND_MORTY_CHARACTERS,
  payload
});

export const getCharacterById = payload => ({
  type: START_GET_RICK_AND_MORTY_CHARACTER_BY_ID,
  payload
});