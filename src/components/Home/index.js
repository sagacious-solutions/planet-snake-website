import React, { useEffect } from "react";

import HeaterControl from "./HeaterControl";
import useHardwareAPI from "../../hooks/useHardwareAPI";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";
import SunMoonSwitch from "./SunMoonSwitch";
import DisplayZoneTemp from "./DisplayZoneTemp";
import VideoFeed from "./VideoFeed";

export default function Home(props) {
  const {
    state,
    useState,
    updateCurrent,
    adjustBaskingTemp,
    decreaseBaskingTemp,
    toggleDayNight,
  } = useHardwareAPI();

  const aBool = false;

  // setInterval(updateCurrent, 5000);

  return (
    <section>
      <VideoFeed />

      <SunMoonSwitch onClick={() => toggleDayNight()} />

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
        onAdd={() => {
          console.log("Shit");
        }}
      />

      <DisplayZoneTemp zone={"Cool Hide"} temperature={state.coolCurrent} />
      <DisplayZoneTemp zone={"Humidity"} temperature={state.humidityCurrent} />
    </section>
  );
}
