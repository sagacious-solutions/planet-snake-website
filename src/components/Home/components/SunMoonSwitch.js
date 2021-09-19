import React, { useState, useEffect } from "react";
import "./SunMoonSwitch.scss";

const SunMoonSwitch = (props) => {
  const [isDay, setIsDay] = useState(true);
  const [turnToNight, setTurnToNight] = React.useState(0);
  const [turnToDay, setTurnToDay] = React.useState(0);
  const [turnToSpooky, setTurnToSpooky] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [sunMoonImage, setSunMoonImage] = useState("images/sunmoonTrans.png");

  // THIS IS SO SPOOKY MODE ONLY RUNS ONCE
  useEffect(() => {
    if (count % 2 === 1) {
      setTimeout(() => setSunMoonImage("images/JackSkellington.png"), 2000);
      setTurnToSpooky(1);
    }
    setCount(count + 1);
    console.log(count);
  }, [props.isSpooky]);

  return (
    <img
      src={sunMoonImage}
      alt="Sun Moon Doodad"
      onClick={() => {
        props.toggleDayNight();

        if (isDay) {
          setTurnToNight(1);
        }
        if (!isDay) {
          setTurnToDay(1);
        }
      }}
      className={`sun-moon-image ${isDay ? "Day" : "Night"}`}
      onAnimationEnd={() => {
        if (turnToSpooky === 0) {
          setIsDay(!isDay);
        }
        setTurnToNight(0);
        setTurnToDay(0);
        setTurnToSpooky(0);
      }}
      turn_to_night={turnToNight}
      turn_to_day={turnToDay}
      turn_to_spooky={turnToSpooky}
    />
  );
};
export default SunMoonSwitch;
