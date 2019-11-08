import { GET_CITIES } from './types';

const getCities = () => async (dispatch, getState) => {
    const response = await fetch('http://localhost:5000/api/cities/all')
                        .then(res => console.log(res.json()))
                        .catch(err=>console.log(err));
                        //catch
    await dispatch({
        type: "GET_CITIES",
        payload: response
    })
    console.log(dispatch)
};

export default getCities;


