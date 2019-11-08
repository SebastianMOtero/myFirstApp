

const initialState = {
    cities: []
}

export default function(state    = initialState, action) {
    
    

    switch (action.type) {
        case "GET_CITIES":
                console.log("HASTA ACA LLEGO");
            return {
                ...state,
                cities: action.payload
            }
        default:
                console.log("hola adri",action.type);
            return state;
    }
}