// Import libraries
import { combineReducers } from 'redux';

// Import reducers
import rickAndMortyReducer from './rickAndMortyReducer';
import futuramaReducer from './futuramaReducer';
import pokemonReducer from './pokemonReducer';

// Add reducers to root
const rootReducer = combineReducers({
	rickAndMortyReducer,
	futuramaReducer,
	pokemonReducer
});

export default rootReducer;