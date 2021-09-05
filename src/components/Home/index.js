import React from "react";

import HeaterControl from "./components/HeaterControl";
import useHardwareAPI from "../../hooks/useHardwareAPI";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";
import SunMoonSwitch from "./components/SunMoonSwitch";
import DisplaySensorData from "./components/DisplayZoneTemp";
import VideoFeed from "./components/VideoFeed";

export default function Home(props) {
  const {
    state,
    adjustBaskingTemp,
    adjustHideTemp,
    toggleDayNight,
  } = useHardwareAPI();

  return (
    <>
      <VideoFeed />
      <section class="control-board">
        {/* <SunMoonSwitch onClick={() => alert("Day Night Switch")} /> */}
        <SunMoonSwitch onClick={() => toggleDayNight()} />

        <div class="heater-controls">
          <HeaterControl
            currentTemp={state.baskingCurrent}
            targetTemp={state.baskingTarget}
            zone="Basking"
            onAdd={() => adjustBaskingTemp()}
            onMinus={() => adjustBaskingTemp(false)}
          />

          <HeaterControl
            currentTemp={state.hideCurrent}
            targetTemp={state.hideTarget}
            zone="Warm Hide"
            onAdd={() => adjustHideTemp()}
            onMinus={() => adjustHideTemp(false)}
          />
        </div>

        <div class="sensor-output">
          <DisplaySensorData
            zone={"Cool Hide"}
            temperature={`${state.coolCurrent}°c`}
          />
          <DisplaySensorData zone={"Humidity"} temperature={"65% R/H"} />
        </div>
      </section>
    </>
  );
}
