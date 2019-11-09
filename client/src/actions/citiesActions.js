import { GET_CITIES, CITIES_LOADING } from './types';

const getCities = () => async (dispatch, getState) => {
    const response = await fetch('http://localhost:5000/api/cities/all')
                        .then(res => res.json());
                        //catch
    console.log(response);
    dispatch({
        type: GET_CITIES,
        payload: response
    })
    console.log("LLEGUE HASTA EL DISPATCH");
    console.log(dispatch.payload);
}
export default getCities;

// export const  setCityLoading = () => {
//     return {
//         type: CITIES_LOADING
//     }
// }
