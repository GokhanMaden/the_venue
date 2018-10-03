import React from "react";

const CountdownItems = (props) => {
  return (
      <div className="countdown_item">
        <div className="countdown_time">
          {props.value}
        </div>
        <div className="countdown">
          {props.title}
        </div>
      </div>
  )
}

export default CountdownItems;