import React, {Component} from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      discountStart: 0,
      discountEnd: 30
    };
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 40);
  }

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }

  render() {
    return(
      <Fade>
        <div className="center_wrapper">
          <div className="discount_wrapper">
            <Fade onReveal={() => this.percentage()}>
              <div className="discount_porcentage">
                <span>{this.state.discountStart}%</span>
                <span>OFF</span>
              </div>
            </Fade>
            <Slide right>
              <div className="discount_description">
                <h3>Purchase tickets before 20th June</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when 
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
            </Slide>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Discount;
