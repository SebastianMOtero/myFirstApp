import React from 'react';
import '../App.css';
import QueryCitiesList from './QueryCitiesList';

const CITY_URL = 'http://localhost:5000/api/cities/all'
const cities = "1"

class Cities extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        cities: []
      };
      // this.state = {
      //     arrayCities: this.cities
      // }
  }

  componentDidMount() {
    //this.setState({...this.state})
    fetch('http://localhost:5000/api/cities/all')
      .then(response => response.json())
      .then(result => this.setState({cities: result}))
      // {
      //   //console.log(result);  //ACA LLEGA A FETCHEAR LOS RESULTADOS
      //   <QueryCitiesList cities={result} />
      // })
      .catch(e => console.log(e));
    }

  render() {
      return (
          <div>
              <ul className="listCities"><QueryCitiesList cities={this.state.cities} /></ul>
              {console.log(this.state.cities)}
          </div>
      );
  }
}

export default Cities