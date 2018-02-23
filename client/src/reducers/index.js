import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';

// Combines all reducers and exports.
export default combineReducers({
    auth: authReducer,
    form: reduxForm
});
