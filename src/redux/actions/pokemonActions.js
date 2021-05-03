// Import const
import { 
  START_GET_ALL_POKEMONS,
  START_GET_POKEMON_BY_ID 
} from '../consts';

export const getAllPokemons = payload => ({
  type: START_GET_ALL_POKEMONS,
  payload
});

export const getPokemonById = payload => ({
  type: START_GET_POKEMON_BY_ID,
  payload
});