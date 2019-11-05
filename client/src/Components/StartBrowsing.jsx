import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import startLogo from '../assets/images/circled-right-2.png'

class StartBrowsing extends React.Component {
    render () {
      return (
        <div>
          <Link to="/cities">
            <img src={startLogo} className="Start-logo" alt="Start Browsing" />
          </Link>
        </div>
      );
    }
  }

  export default StartBrowsing