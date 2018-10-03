import React, { Component } from 'react';
import "./resources/styles.css";

import Header from "./components/Header-Footer/Header";
import Featured from "./components/Featured/";
import VenueNfo from "./components/VenueNfo/";
import Highlight from "./components/Highlights/";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px" , background: "cornflowerblue"}}>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlight />
      </div>
    );
  }
}

export default App;
