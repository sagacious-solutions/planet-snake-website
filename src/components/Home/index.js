import React, { useEffect } from "react";
import HeaterControl from "./HeaterControl";
import useHardwareAPI from "../../hooks/useHardwareAPI";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";
import SunMoonSwitch from "./SunMoonSwitch";
import DisplayZoneTemp from "./DisplayZoneTemp";

export default function Home(props) {
  const {
    state,
    useState,
    updateCurrent,
    increaseBaskingTemp,
    decreaseBaskingTemp,
    toggleDayNight,
  } = useHardwareAPI();

  const aBool = false;

  // setInterval(updateCurrent, 5000);

  return (
    <section>
      {
        <img
          className="vivarium-video"
          src="images/planet_snake.jpg"
          alt="Sunnny the snake"
        />
      }

      <SunMoonSwitch onClick={() => toggleDayNight()} />

      <HeaterControl
        currentTemp={state.baskingCurrent}
        targetTemp={state.baskingTarget}
        zone="Basking"
        onAdd={() => increaseBaskingTemp()}
        onMinus={() => decreaseBaskingTemp()}
      />

      <HeaterControl
        currentTemp={state.hideCurrent}
        targetTemp={state.hideTarget}
        zone="Warm Hide"
        onAdd={() => {
          console.log("Shit");
        }}
      />

      <DisplayZoneTemp zone={"Cool Hide"} temperature={state.coolCurrent} />
    </section>
  );
}
