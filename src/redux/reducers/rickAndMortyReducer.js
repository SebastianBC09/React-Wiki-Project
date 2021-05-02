// Import const
import { 
  START_GET_ALL_RICK_AND_MORTY_CHARACTERS, 
  SUCCESS_GET_ALL_RICK_AND_MORTY_CHARACTERS, 
  ERROR_GET_ALL_RICK_AND_MORTY_CHARACTERS 
} from '../consts';

//Initialize state
const initialState = {
  successRequest: false,
  errorRequest: false,
  charactersLoading: false,
  characters: [],
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
        successRequest: true,
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
    default:
      return { ...state };
  }
}

export default rickAndMortyReducer;