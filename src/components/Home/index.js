import React, { useEffect } from "react";
import HeaterControl from "./HeaterControl";
import useHardwareAPI from "../../hooks/useHardwareAPI";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

export default function Home(props) {
  const { state, useState, updateCurrent } = useHardwareAPI();

  // setInterval(updateCurrent, 5000);

  // useEffect(() => {});

  return (
    <section>
      {
        <img
          className="vivarium-video"
          src="images/planet_snake.jpg"
          alt="Sunnny the snake"
        />
      }

      <HeaterControl
        currentTemp={state.baskingCurrent}
        targetTemp={state.baskingTarget}
        zone="Basking"
        onAdd={() => console.log("poop")}
      />

      <HeaterControl
        currentTemp={state.hideCurrent}
        targetTemp={state.hideTarget}
        zone="Hide"
        onAdd={() => {
          console.log("Shit");
        }}
      />
    </section>
  );
}
