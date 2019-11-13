import React from 'react'
import '../App.css';
import { connect } from 'react-redux';
import  getCities  from '../actions/citiesActions';
import propTypes from 'prop-types';


const CITY_URL = 'http://localhost:5000/api/cities/all'

class Itineraries extends React.Component {
    constructor(props) {
        console.log("asd");
        super(props);
        this.state = {

        };
    }

    async componentDidMount() {
        console.log("asd");
        fetch(CITY_URL)
            .then(resp => resp.json())
            
    };

    render() {
        return(
            <div>
                <h1>Itineraries</h1>
            </div>
        )
    }
}

export default Itineraries;
//de cities viene aca.

///foto de la ciudad
//available mytineraris

//componente de itinerario, lista.