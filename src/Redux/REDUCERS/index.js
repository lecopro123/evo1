import { combineReducers } from 'redux'
import dishes from './dishes';
import posts from './dishp';
import edited from './dishe';
import del from './dishd';

export default combineReducers({
    Dishes: dishes,
    Posts: posts,
    Edit: edited,
    Del: del
})
