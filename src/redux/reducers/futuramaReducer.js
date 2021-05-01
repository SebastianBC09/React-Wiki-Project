// Import const
import { 
  START_GET_ALL_FUTURAMA_CHARACTERS, 
  SUCCESS_GET_ALL_FUTURAMA_CHARACTERS, 
  ERROR_GET_ALL_FUTURAMA_CHARACTERS,
  START_GET_FUTURAMA_CHARACTERS_BY_NAME,
  SUCCESS_GET_FUTURAMA_CHARACTERS_BY_NAME,
  ERROR_GET_FUTURAMA_CHARACTERS_BY_NAME 
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
const futuramaReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_ALL_FUTURAMA_CHARACTERS:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
        charactersLoading: true,
        characters: []
      };
    case SUCCESS_GET_ALL_FUTURAMA_CHARACTERS:
      return { 
        ...state, 
        successRequest: true,
        charactersLoading: false,
        characters: action.result
      };
    case ERROR_GET_ALL_FUTURAMA_CHARACTERS:
      console.log(action.error);
      return { 
        ...state, 
        errorRequest: true,
        charactersLoading: false,
        messageError: action.error 
      };
    case START_GET_FUTURAMA_CHARACTERS_BY_NAME:
      return { 
        ...state, 
        data: action.payload,
        successRequest: false,
        errorRequest: false,
        charactersLoading: true,
        characters: []
      };
    case SUCCESS_GET_FUTURAMA_CHARACTERS_BY_NAME:
      return { 
        ...state, 
        successRequest: true,
        charactersLoading: false,
        characters: action.result
      };
    case ERROR_GET_FUTURAMA_CHARACTERS_BY_NAME:
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

export default futuramaReducer;