import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Combines all reducers and exports.
export default combineReducers({
    auth: authReducer
});
