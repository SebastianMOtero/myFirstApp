import React from 'react'
import {Link} from 'react-router-dom';
import homeLogo from '../assets/images/homeIcon.png';
import '../App.css'


class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {asd: true}
    }
    
    render() {
      return (
          <footer className="App-footer">
            <Link to="/">
              <img src={homeLogo} className="Home-logo" alt="Home" />
            </Link>
          </footer>
      );
    }
  }

  export default Footer