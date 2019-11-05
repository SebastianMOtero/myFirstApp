import React from 'react'
import '../App.css'
import StartBrowsing from './StartBrowsing';
import CarouselCities from './CarouselCities';
import Header from './Header';

class LandingPage extends React.Component {
    render () {
      return (
        <Home/>
      );
    }
  }

  const Home = () => (
    <div>
      <Header />
      <StartBrowsing />
      <CarouselCities />
    </div>
  );
  
export default LandingPage