// Import const
import { 
  START_GET_ALL_CHARACTERS, 
  SUCCESS_GET_ALL_CHARACTERS, 
  ERROR_GET_ALL_CHARACTERS 
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
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_ALL_CHARACTERS:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
        charactersLoading: true
      };
    case SUCCESS_GET_ALL_CHARACTERS:
      const { results: characters } = action.result;
      return { 
        ...state, 
        successRequest: true,
        charactersLoading: false,
        characters
      };
    case ERROR_GET_ALL_CHARACTERS:
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

export default characterReducer;