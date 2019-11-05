import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import '../App.css'
import Cairo from '../assets/images/CarouselCairo.jpg'
import Ginebra from '../assets/images/CarouselGinebra.jpg'
import LasVegas from '../assets/images/CarouselLasVegas.jpg'
import Mumbai from '../assets/images/CarouselMumbai.jpg'
import NewYork from '../assets/images/CarouselNewYork.jpg'
import Paris from '../assets/images/CarouselParis1.jpg'
import Sidney from '../assets/images/CarouselSidney.jpg'
import Toronto from '../assets/images/CarouselToronto.jpg'
import Ushuaia from '../assets/images/CarouselUshuaia.jpg'
import Cairo1 from '../assets/images/CarouselCairo.jpg'
import Cairo2 from '../assets/images/CarouselCairo.jpg'
import Cairo3 from '../assets/images/CarouselCairo.jpg'

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      dots:true,
      centerPadding: '100px',
      autoplay:true
    };
    return (
      <div>
        <h6>Popular MYtineraries</h6>
        <Slider {...settings} className="prueba">
          <div className="bloque">
            <img src={Cairo} alt="Cairo" />
          </div>
          <div className="bloque">
            <img src={Ginebra} alt="Ginebra" />
          </div>
          <div className="bloque">
            <img src={LasVegas} alt="LasVegas" />
          </div>
          <div className="bloque">
            <img src={Mumbai} alt="Mumbai" />
          </div>
          <div className="bloque">
            <img src={NewYork} alt="NewYork" />
          </div>
          <div className="bloque">
            <img src={Paris} alt="Paris" />
          </div>
          <div className="bloque">
            <img src={Sidney} alt="Sidney" />
          </div>
          <div className="bloque">
            <img src={Toronto} alt="Toronto" />
          </div>
          <div className="bloque">
            <img src={Ushuaia} alt="Ushuaia" />
          </div>
          <div className="bloque">
            <img src={Cairo} alt="Cairo" />
          </div>
          <div className="bloque">
            <img src={Cairo} alt="Cairo" />
          </div>
          <div className="bloque">
            <img src={Cairo} alt="Cairo" />
          </div>
        </Slider>
      </div>
    );
  }
}