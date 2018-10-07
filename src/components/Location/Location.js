import React from "react";

const Location = () => {
  return(
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12036.929051256515!2d28.987113498889162!3d41.042049625389545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cef984e492e1bd8!2sBJK+Vodafone+Park!5e0!3m2!1sen!2str!4v1538904202433" 
      width="100%" 
      height="450" 
      frameBorder="0"
      allowFullScreen
      title="1"
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location