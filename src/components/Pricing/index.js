import React, {Component} from "react";
import MyButton from "../Utils/Button";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prices: [100,150,250],
      positions: ['Balcony', 'Medium', 'Star'],
      description: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'It is a long established fact that a reader will be distracted by the readable.',
        'There are many variations of passages of Lorem Ipsum available, but the majority.'
      ],
      linkto: ['http://sales.com/b','http://sales.com/m','http://sales.com/s'],
      delay: [500, 0, 500]
    }
  }

  render() {

    const boxes = this.state.prices.map((box, index) => {
      return  <Zoom delay={this.state.delay[index]} key={index}>
        <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                  <div className="pricing_title">
                    <span>${this.state.prices[index]}</span>
                    <span>{this.state.positions[index]}</span>
                  </div>
                  <div className="pricing_description">
                    {this.state.description[index]}
                  </div>
                  <div className="pricing_buttons">
                    <MyButton 
                      text="Purchase ticket"
                      backgroung="#ffa800"
                      color="#ffffff"
                      link={this.state.linkto[index]}
                    />
                  </div>
                </div>
              </div>
      </Zoom>
    })
    return(
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {boxes}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;