import { useState } from "react";
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
    sheds_imminent: "UNINITIALIZED",
    sheds_complete: "UNINITIALIZED",
    weight_measures: "UNINITIALIZED",
    length_measures: "UNINITIALIZED",
  });

  // For queries on lists of time stamps, this breaks the objects out of the array and into an array of time stamps
  const fetchTimeStamps = (res) => {
    const timestamps = [];

    for (let timeObj of res.data) {
      timestamps.push(timeObj.time_created);
    }

    return timestamps;
  };

  // For queries that are lists of numbers, this breaks the objects out of the array into an array of numbers to go into state
  const processDataToArray = (res, key) => {
    const values = [];

    for (let obj of res.data) {
      values.push(obj[key]);
    }

    return values;
  };

  // Updates all values of snake state for landing page of Snake State
  const updateAll = () => {
    Promise.all([
      getAllPoops(),
      getAllUrateFound(),
      getAllRatsOffered(),
      getAllRatsAte(),
      getAllRatsIgnored(),
      getAllShedsImminent(),
      getAllShedsComplete(),
      getAllWeightMeasures(),
      getAllLengthMeasures(),
    ]).then((responses) => {
      setState((classicState) => {
        return {
          ...classicState,
          poops_found: fetchTimeStamps(responses[0]),
          urates_found: fetchTimeStamps(responses[1]),
          rats_offered: fetchTimeStamps(responses[2]),
          rats_ate: fetchTimeStamps(responses[3]),
          rats_ignored: fetchTimeStamps(responses[4]),
          sheds_imminent: fetchTimeStamps(responses[5]),
          sheds_complete: fetchTimeStamps(responses[6]),
          weight_measures: processDataToArray(responses[7], "snake_weight"),
          length_measures: processDataToArray(responses[8], "snake_length"),
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
  const getAllShedsImminent = () => {
    return axios.get(`${db_address}/sheds_imminent`);
  };
  const getAllShedsComplete = () => {
    return axios.get(`${db_address}/sheds_complete`);
  };
  const getAllWeightMeasures = () => {
    return axios.get(`${db_address}/weight_measures`);
  };
  const getAllLengthMeasures = () => {
    return axios.get(`${db_address}/length_measures`);
  };

  return { state, updateAll };
}
