// Import libraries
import { combineReducers } from 'redux';

// Import reducers
import charactersReducer from './charactersReducer';

// Add reducers to root
const rootReducer = combineReducers({
	charactersReducer
});

export default rootReducer;