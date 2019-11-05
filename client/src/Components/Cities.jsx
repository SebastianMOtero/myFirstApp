import React from 'react';
import '../App.css';
import QueryCitiesList from './QueryCitiesList';

const CITY_URL = 'http://localhost:5000/api/cities/all'
const cities = "1"

class Cities extends React.Component {
  constructor() {
      super()
      // this.state = {
      //     arrayCities: this.cities
      // }
  }

  componentDidMount() {
    //this.setState({...this.state})
    fetch('http://localhost:5000/api/cities/all')
      .then(response => {
        return response.json()
      })
      .then(result => {
        console.log(result)
      })
      .catch(e => console.log(e));
  }

  render() {
      return(
          <div>
              {/* <QueryCitiesList cities={this.state.arrayCities} /> */}
              asd
          </div>
      );
  }

 
}

export default Cities