import React, { useEffect } from "react";
import HeaterControl from "./HeaterControl";
import useHardwareAPI from "../../hooks/useHardwareAPI";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

export default function Home(props) {
  const { state, updateBaskingCurrent } = useHardwareAPI();

  // useEffect(() => {}, state);
  updateBaskingCurrent();

  return (
    <section>
      {
        <img
          className="vivarium-video"
          src="images/planet_snake.jpg"
          alt="Sunnny the snake"
        />
      }
      <h1></h1>
      <HeaterControl
        currentTemp={state.baskingCurrent}
        targetTemp={state.baskingTarget}
        zone="Basking"
      />
    </section>
  );
}
