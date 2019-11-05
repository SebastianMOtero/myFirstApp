import React from 'react'
import menuIcon from '../assets/images/menuOption.jpg';
import userIcon from '../assets/images/userIcon.png';
import '../App.css';



class Header1 extends React.Component {
    render () {
      return (
        <header className="App-header">
            <div>
                <img src={userIcon} alt="User" />
            </div>
            <div>
                <img src={menuIcon} alt="Options" />
            </div>
        </header>
      );
    }
  }

  export default Header1