import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const db_address = process.env.REACT_APP_DATABASE_API_ADDY;

export default function useDatabaseAPI() {
  const [state, setState] = useState({
    poops_found: "UNINITIALIZED",
    urates_found: "UNINITIALIZED",
  });

  const updatePoops = () => {
    getAllPoops().then((res) => {
      const timestamps = [];

      for (let timeObj of res.data) {
        console.log(timeObj);
        timestamps.push(timeObj.time_created);
      }

      console.log(timestamps);

      setState((classicState) => {
        return { ...classicState, poops_found: timestamps };
      });
    });
  };

  const seconds = 1000; // For setTimeouts

  const getAllPoops = () => {
    return axios.get(`${db_address}/poop_found`);
  };
  const getAllUrateFound = () => {
    return axios.get(`${db_address}/urate_found`);
  };

  return { updatePoops, getAllUrateFound, state };
}
