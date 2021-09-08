import { PinDropSharp } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./SunMoonSwitch.scss";

const SunMoonSwitch = (props) => {
  const [rotate, setRotate] = React.useState(0);
  const [isDay, setIsDay] = useState(true);
  const [turnToNight, setTurnToNight] = React.useState(0);
  const [turnToDay, setTurnToDay] = React.useState(0);
  const [turnToSpooky, setTurnToSpooky] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [sunMoonImage, setSunMoonImage] = useState("images/sunmoonTrans.png");

  // THIS IS SO SPOOKY MODE ONLY RUNS ONCE
  useEffect(() => {
    if (count % 2 === 1) {
      // alert("Holy Fuck")
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
      // onClick={() => {

      // }}
      // `
      className={`sun-moon-image ${isDay ? "Day" : "Night"}`}
      onAnimationEnd={() => {
        if (turnToSpooky === 0) {
          setIsDay(!isDay);
        }
        setTurnToNight(0);
        setTurnToDay(0);
        setTurnToSpooky(0);
      }}
      turnToNight={turnToNight}
      turnToDay={turnToDay}
      turnToSpooky={turnToSpooky}
      isDay
    />
  );
};
export default SunMoonSwitch;

// import React from 'react'
// import styles from './animated-image.module.scss'

// const Image = () => {
//   const [wobble, setWobble] = React.useState(0)
//   return (
//     <img
//       className={styles.image}
//       src="https://source.unsplash.com/random/400x200"
//       alt="randomised!"
//       onClick={() => setWobble(1)}
//       onAnimationEnd={() => setWobble(0)}
//       wobble={wobble}
//     />
//   )
// }
// export default Image
