import { GET_CITIES, CITIES_LOADING } from '../actions/types';

const initialState = {
    cities: [],
    loading: false,
}

export default function(state = initialState, action) {
    
    switch (action.type) {
        case GET_CITIES:
            console.log("CITY REDUCER CASO GET_CITIES");
            console.log(action.type);
            console.log(action.payload); //deuvleve undefinided
            return {
                ...state,
                cities: action.payload  //este es el estado cities del reducer 
            };
        default:
            console.log("CITY REDUCER DEFAULT",action.type);
            return state;
    }
}