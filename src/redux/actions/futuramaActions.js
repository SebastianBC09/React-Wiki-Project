// Import const
import { 
  START_GET_ALL_FUTURAMA_CHARACTERS,
  START_GET_FUTURAMA_CHARACTERS_BY_NAME 
} from '../consts';

export const getAllCharacters = payload => ({
  type: START_GET_ALL_FUTURAMA_CHARACTERS,
  payload
});

export const getCharactersByName = payload => ({
  type: START_GET_FUTURAMA_CHARACTERS_BY_NAME,
  payload
});