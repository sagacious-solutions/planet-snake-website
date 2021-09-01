import React from "react";
import "./SunMoonSwitch.scss";

// This generates a fairly open ended button thats used in multiple places
export default function SunMoonSwitch(props) {
  // Generates a class tag to determine if the button is green or re

  return (
    <>
      <img
        className="sun-moon-image"
        src="images/sunmoonTrans.png"
        alt="Sun Moon Doodad"
        onClick={props.onClick}
      />
    </>
  );
}
