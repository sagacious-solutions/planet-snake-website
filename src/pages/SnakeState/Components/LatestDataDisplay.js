import * as React from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "timeago.js";

export default function LatestDataDisplay(props) {
  const state = { ...props.state };

  useEffect(() => {
    props.updateAll();
  }, []);

  // This is currentlly undergoing debugging
  const measureAvgTimeBetween = (timeArray) => {
    let lastTime = timeArray[0];
    const timeBetween = [];

    if (timeArray === "UNINITIALIZED") {
      return "No Data";
    }

    if (timeArray.length === 1) {
      return "Only one Value";
    }

    for (let value of timeArray) {
      if (value !== lastTime) {
        timeBetween.push(value - lastTime);
      }
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "event", headerName: "Event", width: 200 },
    { field: "mostRecent", headerName: "Most Recent", width: 200 },
    { field: "avgTimeBetween", headerName: "Avg Time Between", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      event: "Poop Found",
      mostRecent: format(state.poops_found[0]),
      avgTimeBetween: measureAvgTimeBetween(state.poops_found),
    },
    {
      id: 2,
      event: "Urate Found",
      mostRecent: format(state.urates_found[0]),
    },
    {
      id: 3,
      event: "Rat Offered",
      mostRecent: format(state.rats_offered[0]),
    },
    {
      id: 4,
      event: "Rat Ate",
      mostRecent: format(state.rats_ate[0]),
    },
    {
      id: 5,
      event: "Rat Ignored",
      mostRecent: format(state.rats_ignored[0]),
    },

    {
      id: 6,
      event: "Shed Imminent",
      mostRecent: format(state.sheds_imminent[0]),
    },
    {
      id: 7,
      event: "Shed Complete",
      mostRecent: format(state.sheds_complete[0]),
    },
    {
      id: 8,
      event: "Last Weigh In",
      mostRecent: `${state.weight_measures[0]} Grams`,
    },
    {
      id: 9,
      event: "Last Length Measurement",
      mostRecent: `${state.length_measures[0]} +/-3 inches`,
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={9}
      rowsPerPageOptions={[5]}
      style={{ height: 600, width: "100%" }}
    />
  );
}
