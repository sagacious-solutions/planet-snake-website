import React from "react";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

export default function Home(props) {
  return (
    <section>
      {
        <img
          className="vivarium-video"
          src="images/planet_snake.jpg"
          alt="Sunnny the snake"
        />
      }
      <h1>HOMEPAGE</h1>
    </section>
  );
}
