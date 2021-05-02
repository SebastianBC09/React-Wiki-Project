// Import libraries
import { combineReducers } from 'redux';

// Import reducers
import rickAndMortyReducer from './rickAndMortyReducer';
import futuramaReducer from './futuramaReducer';

// Add reducers to root
const rootReducer = combineReducers({
	rickAndMortyReducer,
	futuramaReducer
});

export default rootReducer;