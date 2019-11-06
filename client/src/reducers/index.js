import { combineReducers } from 'redux';
import itemReducer from './cityReducer';

export default combineReducers({
    item: itemReducer
});