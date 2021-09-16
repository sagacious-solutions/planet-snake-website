import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const db_address = process.env.REACT_APP_DATABASE_API_ADDY;

export default function useDatabaseAPI() {
  const [state, setState] = useState({
    poops_found: "UNINITIALIZED",
    urates_found: "UNINITIALIZED",
    rats_offered: "UNINITIALIZED",
    rats_ate: "UNINITIALIZED",
    rats_ignored: "UNINITIALIZED",
  });

  // Generalized function to fetch all timestamps from any bool snake state
  const fetchTimeStamps = (res) => {
    const timestamps = [];

    for (let timeObj of res.data) {
      timestamps.push(timeObj.time_created);
    }

    return timestamps;
  };

  const updateAll = () => {
    Promise.all([
      getAllPoops(),
      getAllUrateFound(),
      getAllRatsOffered(),
      getAllRatsAte(),
      getAllRatsIgnored(),
    ]).then((responses) => {
      setState((classicState) => {
        console.log(responses);
        return {
          ...classicState,
          poops_found: fetchTimeStamps(responses[0]),
          urates_found: fetchTimeStamps(responses[1]),
          rats_offered: fetchTimeStamps(responses[2]),
          rats_ate: fetchTimeStamps(responses[3]),
          rats_ignored: fetchTimeStamps(responses[4]),
        };
      });
    });
  };

  const updatePoops = () => {
    getAllPoops().then((res) => {
      setState((classicState) => {
        return { ...classicState, poops_found: fetchTimeStamps(res) };
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
  const getAllRatsOffered = () => {
    return axios.get(`${db_address}/rats_offered`);
  };
  const getAllRatsAte = () => {
    return axios.get(`${db_address}/rats_ate`);
  };
  const getAllRatsIgnored = () => {
    return axios.get(`${db_address}/rats_ignored`);
  };

  return { updatePoops, getAllUrateFound, state, updateAll };
}
