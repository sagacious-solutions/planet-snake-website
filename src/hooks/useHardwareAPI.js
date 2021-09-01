import { useEffect, useState } from "react";
import axios from "axios";
const api_network_address = `http://192.168.1.243:8345`;
axios.defaults.baseURL = api_network_address;

export default function useHardwareAPI() {
  const [state, setState] = useState({
    baskingTarget: 37,
    baskingCurrent: 5,
    hideTarget: 32,
    hideCurrent: 5,
    coolCurrent: 5,
  });

  const updateCurrent = () => {
    console.log("Update All Current");
    getTemperatureFromApi("/current")
      .then((res) => {
        setState((res) => {
          console.log(res);
          const newState = { ...state };

          return newState;
        });

        // setState((oldState) => {
        //   return { ...oldState };
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTemperatureFromApi = function (target) {
    return axios.get(target);
  };

  return { state, setState, updateCurrent };
}
