// Import const
import { 
  START_GET_ALL_POKEMONS, 
  SUCCESS_GET_ALL_POKEMONS, 
  ERROR_GET_ALL_POKEMONS,
  START_GET_POKEMON_BY_ID,
  SUCCESS_GET_POKEMON_BY_ID,
  ERROR_GET_POKEMON_BY_ID 
} from '../consts';

//Initialize state
const initialState = {
  successRequest: false,
  errorRequest: false,
  pokemonsLoading: false,
  pokemons: [],
  pokemonLoading: false,
  pokemon: {},
  messageError: ''
};

//Create reducers
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_ALL_POKEMONS:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
        pokemonsLoading: true,
        pokemons: []
      };
    case SUCCESS_GET_ALL_POKEMONS:
      const { results } = action.result;
      return { 
        ...state,
        pokemonsLoading: false,
        pokemons: results
      };
    case ERROR_GET_ALL_POKEMONS:
      console.log(action.error);
      return { 
        ...state, 
        errorRequest: true,
        pokemonsLoading: false,
        messageError: action.error 
      };
    case START_GET_POKEMON_BY_ID:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
        pokemonLoading: true,
        pokemon: {}
      };
    case SUCCESS_GET_POKEMON_BY_ID:
      return { 
        ...state, 
        successRequest: true,
        pokemonLoading: false,
        pokemon: action.result
      };
    case ERROR_GET_POKEMON_BY_ID:
      console.log(action.error);
      return { 
        ...state, 
        errorRequest: true,
        pokemonLoading: false,
        messageError: action.error 
      };
    default:
      return { ...state };
  }
}

export default pokemonReducer;