import React from 'react';
import '../App.css';
import QueryCitiesList from './QueryCitiesList';
import { connect } from 'react-redux';
import  getCities  from '../actions/citiesActions';
import propTypes from 'prop-types';

const CITY_URL = 'http://localhost:5000/api/cities/all'
//const cities = "1"

class Cities extends React.Component {
  constructor(props) {
      super(props);
     
      // this.state = {
      //     arrayCities: this.cities
      // }
  }

  async componentDidMount() {
      await this.props.getCities();
      console.log(this.props.cities);
    //this.setState({...this.state})
    // fetch('http://localhost:5000/api/cities/all')
    //   .then(response => response.json())
    //   .then(result => this.setState({cities: result}))
    //   // {
    //   //   //console.log(result);  //ACA LLEGA A FETCHEAR LOS RESULTADOS
    //   //   <QueryCitiesList cities={result} />
    //   // })
    //   .catch(e => console.log(e));
    }

  render() {
      return (
          <div>
             
              <h1>asd</h1>
          </div>
      );
  }
}

Cities.propTypes = {  
  getCities: propTypes.func.isRequired,
  cities: propTypes.object.isRequired  //representa el estado
}

const mapStateToProps = state => {
  return {
      cities: state.city.cities
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getCities: () => dispatch(getCities())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cities)  



//  {/* <ul className="listCities"><QueryCitiesList cities={this.props.getCities} /></ul>
//               {console.log(this.props.getCities)} */}