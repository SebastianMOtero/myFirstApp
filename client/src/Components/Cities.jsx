import React from 'react';
import '../App.css';
import QueryCitiesList from './QueryCitiesList';
import { connect } from 'react-redux';
import  getCities  from '../actions/citiesActions';
import propTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Cities extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        filteredCities: []
      }
  }

  filterCities = (e) => {
    let filteredCities = this.props.cities; //recibo las
    filteredCities = filteredCities.filter((city) => {
      let cityName = city.name.toLowerCase() + city.country.toLowerCase()
      return cityName.indexOf(
        e.target.value.toLowerCase()) == 0
    })
    this.setState({
      filteredCities: filteredCities
    })
  }



  async componentDidMount() {
      await this.props.getCities();
      this.setState({ filteredCities: this.props.cities })
      console.log("CITIES COMPONENT BLOQUE COMPONENT DID")
      console.log(this.props.cities);
      console.log(this.state.filteredCities);
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
            <label>Filter by city: </label>
            <input type="text" id="filter" 
              onChange={this.filterCities}/>

             <ListGroup 
                className="listCities"><QueryCitiesList cities={this.state.filteredCities} name={"asd"} />
             </ListGroup>
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
  console.log(state);
  
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