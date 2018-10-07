import React, { Component } from 'react';
import "./resources/styles.css";
import {Element} from "react-scroll";

import Header from "./components/Header-Footer/Header";
import Featured from "./components/Featured/";
import VenueNfo from "./components/VenueNfo/";
import Highlight from "./components/Highlights/";
import Pricing from "./components/Pricing/";
import Location from "./components/Location/Location";
import Footer from "./components/Header-Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px" , background: "cornflowerblue"}}>
        <Header/>
        
        <Element name="featured">
          <Featured/>
        </Element>
        <Element name="venuenfo">
          <VenueNfo/>
        </Element>
        <Element name="highlight">
          <Highlight/>
        </Element>
        <Element name="pricing">
          <Pricing/>
        </Element>
        <Element name="location">
          <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
