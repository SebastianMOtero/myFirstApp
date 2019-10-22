import React from 'react';
import homeLogo from './assets/images/homeIcon.png';
import headerLogo from './assets/images/MYtineraryLogo.png';
import startLogo from './assets/images/circled-right-2.png'
//import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Cities from './Cities';
import MYtinerary from './MYtinerary';
import CreateAccount from './CreateAccount';
import Login from './Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/MYtinerary" component={MYtinerary} />
          <Route path="/login" component={Login} />
          <Route path="/createAccount" component={CreateAccount} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Header />
    <StartBrowsing />
    <JoinUs />
    <Footer />
  </div>
);


class Header extends React.Component {
  render () {
    return (
      <div>
        <header className="App-header">
          <img src={headerLogo} className="Header-logo" alt="MYtinerary Logo" />
          <h3>Find your perfect trip, designed by <br></br> insiders who know and love their cities.</h3>
        </header>
      </div>
    );
  }
}

class StartBrowsing extends React.Component {
  render () {
    return (
      <div>
        <h2>Start Browsing</h2>
        <Link to="/cities">
          <img src={startLogo} className="Start-logo" alt="Start Browsing" />
        </Link>
      </div>
    );
  }
}

class JoinUs extends React.Component {
  render() {
    return (
      <div>
        <h3>Want to build your own MYtinerary?</h3>
        <div className="Account-options">
          <a  href="/login">Log in</a>
          <a  href="/createAccount">Create Account</a>
        </div>
      </div>
    );
  }
}
class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="App-footer">
          <Link to="/">
            <img src={homeLogo} className="Home-logo" alt="Home" />
          </Link>
        </footer>
      </div>
    );
  }
}

export default App;
