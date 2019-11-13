import { GET_ITINERARY } from './types';

const getItineraries = (city) => async(dispatch, getState) => {
    const response = await fetch('http://localhost:5000/api/itinerary/barcelona')
        .then(res => res.json());
    //catch
    console.log(response);
    dispatch({
        //type: GET_CITIES,
        payload: response
    })
    console.log("LLEGUE HASTA EL DISPATCH");
    console.log(dispatch.payload);
}
export default getCities;