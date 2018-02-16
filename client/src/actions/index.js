import axios from 'axios';
import { FETCH_USER } from './types';

// Action creator which gets the user info from /api/current_user.
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res });
};
