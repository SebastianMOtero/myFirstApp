import React from 'react'
import headerLogo from '../assets/images/MYtineraryLogo.png';
import '../App.css';

class HeaderLandingPage extends React.Component {
    render () {
      return (
        <div>
          <header className="HeaderLandingPage">
            <img src={headerLogo} className="Header-logo" alt="MYtinerary Logo" />
            <h5>Find your perfect trip, designed by insiders <br></br> 
                who know and love their cities.</h5>
          </header>
        </div>
      );
    }
  }

  export default HeaderLandingPage