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
    dayLightOn: true,
  });

  useEffect(() => {
    updateCurrent();
  }, [state.dayLightOn]);

  const updateCurrent = () => {
    getTemperatureFromApi("/current")
      .then((res) => {
        setState((stateClassic) => {
          console.log("this is res.data", res.data);
          const newState = {
            ...stateClassic,
            baskingCurrent: res.data.baskingCurrent,
            hideCurrent: res.data.hideCurrent,
            coolCurrent: res.data.coolCurrent,
          };

          return newState;
        });
      })
      .catch((err) => {
        console.log(err);
      });

    getTargetConfig().then((res) => {
      console.log(res.data);
    });
  };

  const increaseBaskingTemp = () => {
    console.log("increase basking");
    // return axios.post("/baskingtargetup");
  };
  const decreaseBaskingTemp = () => {
    console.log("decrease basking");
    // return axios.post("/baskingtargetup");
  };
  const toggleDayNight = () => {
    console.log("Toggle Day Night Clicked");

    setState(() => {
      let newState = { ...state, dayLightOn: !state.dayLightOn };

      return newState;
    });

    return axios.get("/toggledaynight");
  };

  const getTargetConfig = () => {
    return axios.get("/targetconfig");
  };

  const getTemperatureFromApi = (target) => {
    return axios.get(target);
  };

  // updateCurrent();
  // setInterval(updateCurrent, 30000);

  return {
    state,
    setState,
    updateCurrent,
    increaseBaskingTemp,
    decreaseBaskingTemp,
    toggleDayNight,
  };
}
