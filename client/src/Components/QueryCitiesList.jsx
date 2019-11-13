//recibe objetos de ciudades y retorna LI de los objetos
import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Itineraries from './Itineraries';

// const CitiesList = ({ cities }) => {
//     cities.map(city=> <li>{city}</li>)
// }
//const CITY_URL = "http://localhost:5000/api/cities/all"

const CitiesList = (props) =>{
    console.log(props)
    return props.cities.map(city => <ListGroupItem tag="button"  action key={city.name}>{city.name}</ListGroupItem>)
}




// props.cities.cities.map(city => <li key={city.name}>{city.name}</li>)


// cities.map(city => <li> {city} </li>)


export default CitiesList


    //AddCity fecthing data
    // fetchCities = () => {
    //     this.setState({...this.state})
    //     fetch(CITY_URL)
    //         .then(response => response.json())
    //         .then(result => this.setState({arrayCities: result}))
    //         .catch(e => console.log(e));
    // }




