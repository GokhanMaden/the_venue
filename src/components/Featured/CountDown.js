import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import CountdownItem from "./CountDownItems";

class CountDown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      deadline: "Dec, 16, 2018",
      days:"0",
      hours:"0",
      minutes:"0",
      seconds:"0"
    };
  }

  componentDidMount() {

    setInterval(() => this.getCountdownTime(this.state.deadline), 1000);

  }

  getCountdownTime = (deadline) => {

    const time = Date.parse(deadline) - Date.parse(new Date());
    
    if(time < 0) {
      console.log("Time passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000/60) % 60);
      const hours = Math.floor((time / (1000*60*60)) % 24);
      const days = Math.floor(time / (1000*60*60*24));
      
      this.setState({
        days,
        hours,
        minutes,
        seconds
      })
    }
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">
            Events Start In
          </div>
          <div className="countdown_bottom">
          <CountdownItem 
              value={this.state.days}
              title="Days" 
            />
            <CountdownItem 
              value={this.state.hours}
              title="Hours" 
            />
            <CountdownItem 
              value={this.state.minutes}
              title="Minutes" 
            />
            <CountdownItem 
              value={this.state.seconds}
              title="Seconds" 
            />
          </div>
        </div>
      </Slide>
    )
  }
}

export default CountDown;