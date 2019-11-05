import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cities from './Components/Cities';
import listCities from './Components/QueryCitiesList';
import MYtinerary from './Components/MYtinerary';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import LandingPage from './Components/LandingPage';
import AppNavBar from './Components/AppNavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
            <div className="App">
                <AppNavBar />
                <div className="App-content">
                  <Switch>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/cities" component={Cities} />
                  <Route path="/MYtinerary" component={MYtinerary} />
                  <Route path="/login" component={Login} />
                  <Route path="/createAccount" component={CreateAccount} />
                  </Switch>
                </div>
                <Footer />
            </div>
        </Router>
  );
}

export default App;
