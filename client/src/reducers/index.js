import { combineReducers }  from 'redux';
import cityReducer from './cityReducer';

export default combineReducers({
    city: cityReducer  //Aca estoy renombrando al city reducer como city.
});