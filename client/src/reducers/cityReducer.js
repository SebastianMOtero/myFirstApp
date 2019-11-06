import { GET_CITIES } from '../actions/citiesActions';

const initialState = {
    cities: []
}

export default function(state = initialState, action) {
    console.log(action.type);

    switch (action.type) {
        case 'GET_CITIES':
            return {
                ...state,
                cities: action.payload
            }
        default:
            return state;
    }
}