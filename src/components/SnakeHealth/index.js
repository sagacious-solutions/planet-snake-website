import React, { useEffect } from "react";

import SnakeHealthDataDisplay from "./SnakeHealthDataDisplay";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

export default function Home(props) {
  return (
    <>
      <SnakeHealthDataDisplay />
    </>
  );
}
