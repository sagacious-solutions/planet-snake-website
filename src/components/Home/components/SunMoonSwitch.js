import React from "react";
import "./SunMoonSwitch.scss";

  const SunMoonSwitch = () => {
    const [rotate, setRotate] = React.useState(0)
      return (
        <img
          className="sun-moon-image"
          src="images/sunmoonTrans.png"
          alt="Sun Moon Doodad"
          onClick={() => setRotate(1)}
          onAnimationEnd={() => setRotate(0)}
          rotate={rotate}
          
        />
    );
  }  
  export default SunMoonSwitch
