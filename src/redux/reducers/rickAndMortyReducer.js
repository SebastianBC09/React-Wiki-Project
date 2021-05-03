// Import const
import { 
  START_GET_ALL_RICK_AND_MORTY_CHARACTERS, 
  SUCCESS_GET_ALL_RICK_AND_MORTY_CHARACTERS, 
  ERROR_GET_ALL_RICK_AND_MORTY_CHARACTERS,
  START_GET_RICK_AND_MORTY_CHARACTER_BY_ID,
  SUCCESS_GET_RICK_AND_MORTY_CHARACTER_BY_ID,
  ERROR_GET_RICK_AND_MORTY_CHARACTER_BY_ID,
} from '../consts';

//Initialize state
const initialState = {
  successRequest: false,
  errorRequest: false,
  charactersLoading: false,
  characters: [],
  characterLoading: false,
  character: {},
  messageError: ''
};

//Create reducers
const rickAndMortyReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_ALL_RICK_AND_MORTY_CHARACTERS:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
        charactersLoading: true,
        characters: []
      };
    case SUCCESS_GET_ALL_RICK_AND_MORTY_CHARACTERS:
      const { results: characters } = action.result;
      return { 
        ...state, 
        charactersLoading: false,
        characters
      };
    case ERROR_GET_ALL_RICK_AND_MORTY_CHARACTERS:
      console.log(action.error);
      return { 
        ...state, 
        errorRequest: true,
        charactersLoading: false,
        messageError: action.error 
      };
      case START_GET_RICK_AND_MORTY_CHARACTER_BY_ID:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
        characterLoading: true,
        character: {  }
      };
    case SUCCESS_GET_RICK_AND_MORTY_CHARACTER_BY_ID:
      return { 
        ...state, 
        successRequest: true,
        characterLoading: false,
        character: action.result
      };
    case ERROR_GET_RICK_AND_MORTY_CHARACTER_BY_ID:
      console.log(action.error);
      return { 
        ...state, 
        errorRequest: true,
        characterLoading: false,
        messageError: action.error 
      };
    default:
      return { ...state };
  }
}

export default rickAndMortyReducer;