import * as React from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "timeago.js";
import useDatabaseAPI from "../../../hooks/useDatabaseAPI";

// This react table takes in arrays of time stamps and formats them with timeago's format function
export default function DataDisplay() {
  const { state, updateAll } = useDatabaseAPI();

  useEffect(() => {
    updateAll();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "event", headerName: "Event", width: 200 },
    { field: "mostRecent", headerName: "Most Recent", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      event: "Poop Found",
      mostRecent: format(state.poops_found[0]),
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
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
