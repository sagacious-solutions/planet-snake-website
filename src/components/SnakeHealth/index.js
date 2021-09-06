import React, { useEffect } from "react";

import SnakeHealthDataDisplay from "./SnakeHealthDataDisplay";
import SnakeHealthButtons from "./SnakeHealthButtons";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

export default function Home(props) {
  return (
    <>
      <div className="pageBox">
        <SnakeHealthButtons />
        <SnakeHealthDataDisplay />
      </div>
    </>
  );
}
